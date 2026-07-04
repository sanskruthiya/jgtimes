import { redirect } from '@sveltejs/kit';
import { ADMIN_PASSWORD } from '$env/dynamic/private';
import { supabaseAdmin } from '$lib/server/supabaseAdmin';

export async function load({ cookies }) {
  const session = cookies.get('admin_session');
  if (session !== ADMIN_PASSWORD) {
    throw redirect(303, '/admin/login');
  }

  const { data: comments, error } = await supabaseAdmin
    .from('comments')
    .select('id, article_id, author_name, content, created_at')
    .eq('status', 'pending')
    .order('created_at', { ascending: true });

  if (error) console.error('Admin load error:', error);

  return { comments: comments || [] };
}

export const actions = {
  approve: async ({ request, cookies }) => {
    if (cookies.get('admin_session') !== ADMIN_PASSWORD) throw redirect(303, '/admin/login');
    const formData = await request.formData();
    const id = formData.get('id')?.toString();
    const { error } = await supabaseAdmin.from('comments').update({ status: 'approved' }).eq('id', id);
    if (error) return { success: false };
    return { success: true };
  },

  reject: async ({ request, cookies }) => {
    if (cookies.get('admin_session') !== ADMIN_PASSWORD) throw redirect(303, '/admin/login');
    const formData = await request.formData();
    const id = formData.get('id')?.toString();
    const { error } = await supabaseAdmin.from('comments').update({ status: 'rejected' }).eq('id', id);
    if (error) return { success: false };
    return { success: true };
  },

  logout: async ({ cookies }) => {
    cookies.delete('admin_session', { path: '/admin' });
    throw redirect(303, '/admin/login');
  }
};
