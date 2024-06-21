import { axiosInstance } from '@/services/api';

export async function postComment({ body }) {
  const { data } = await axiosInstance.post(`/api/v1/manga/${body.mangaId}/comments`, { body });
  return data;
}
