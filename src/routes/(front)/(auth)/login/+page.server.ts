import { lucia } from '$lib/server/lucia';
import { prisma } from '$lib/server/prisma';
import bcrypt from 'bcrypt';
import { fail, type Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (locals.session) {
		const session = await lucia.validateSession(locals.session.id);
		if (session) throw redirect(302, '/account');
	}
	return {};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
			return fail(400, {
				submitted: false,
				message: 'Invalid input'
			});
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email
				}
			});

			if (!user) {
				return fail(400, {
					submitted: false,
					message: 'Incorrect email or password'
				});
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (isMatch) {
				const session = await lucia.createSession(user.id, {});
				const cookie = lucia.createSessionCookie(session.id);
				cookies.set(cookie.name, cookie.value, {
					path: '.',
					...cookie.attributes
				});

				return {
					status: 200,
					// headers: {
					//   'set-cookie': cookie,
					// },
					body: {
						message: 'User Logged In',
						submitted: true
					}
				};
			} else {
				return fail(400, {
					submitted: false,
					message: 'Incorrect email or password'
				});
			}
		} catch (e) {
			console.error(e);
		}
	}
};
