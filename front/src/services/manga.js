import { axiosInstance } from '@/services/api';

export async function getMangas() {
  const { data } = await axiosInstance.get('/mangas');
  return data;
}
