import { fail, type Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import { lucia } from '$lib/server/lucia';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await lucia.validateSession(locals?.session?.id || '');
	if (session.session) throw redirect(302, '/account/');
	return {};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email') as string;
		const password = form.get('password') as string;

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
			return fail(400, {
				message: 'Invalid input',
				submitted: false
			});
		}

		let uuid = uuidv4();
		let user;

		try {
			user = await prisma.user.create({
				data: {
					email,
					password: hashedPassword,
					key: uuid
				}
			});

			const session = await lucia.createSession(user.id, {});
			const cookie = lucia.createSessionCookie(session.id);
			cookies.set(cookie.name, cookie.value, {
				path: '.',
				...cookie.attributes
			});

			return {
				status: 200,
				body: {
					success: true,
					message: 'User created'
				}
			};
		} catch (e) {
			return fail(400, {
				message: 'Email already exists',
				success: false
			});
		}
	}
};
