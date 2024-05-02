import { lucia } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';

export const POST = async ({ locals }) => {
	const session = locals.session;
	if (!session) {
		throw redirect(302, '/login');
	} else {
		await lucia.invalidateSession(session.id);
	}
	throw redirect(302, '/login');
};
