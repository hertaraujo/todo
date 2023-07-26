import { api } from '@/services/api';
import useSWR from 'swr';

export const useTodos = (url: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    url,
    async (url: string) => {
      const { data } = await api.get(url);
      return data;
    },
  );

  console.log(data);

  return { data, isLoading, error, mutate };
};
