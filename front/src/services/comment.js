import { axiosInstance } from '@/services/api';

export async function postComment({ body }) {
  const { data } = await axiosInstance.post('/comment', { body });
  return data;
}
