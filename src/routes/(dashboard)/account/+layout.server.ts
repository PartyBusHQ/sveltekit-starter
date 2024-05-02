import { redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/lucia';

export const load = async ({ locals }) => {
	const authInfo = await lucia.validateSession(locals.session?.id || '');
	const session = authInfo.session;
	if (!session) throw redirect(302, '/login');
	return { props: { session } };
};
