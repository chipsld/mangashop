import { axiosInstance } from '@/services/api';

export async function getMangas() {
  const { data } = await axiosInstance.get('/mangas');
  return data;
}

export async function getManga(id) {
  const { data } = await axiosInstance.get(`/mangas/${id}`);
  return data;
}
