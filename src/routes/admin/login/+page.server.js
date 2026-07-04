import { redirect } from '@sveltejs/kit';
import { ADMIN_PASSWORD } from '$env/dynamic/private';

export async function load({ cookies }) {
  const session = cookies.get('admin_session');
  if (session === ADMIN_PASSWORD) {
    throw redirect(303, '/admin');
  }
  return {};
}

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const password = formData.get('password')?.toString();

    if (password === ADMIN_PASSWORD) {
      cookies.set('admin_session', ADMIN_PASSWORD, {
        path: '/admin',
        httpOnly: true,
        maxAge: 60 * 60 * 24
      });
      throw redirect(303, '/admin');
    }

    return { error: 'パスワードが正しくありません。' };
  }
};
