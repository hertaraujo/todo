import { api } from '@/services/api';
import useSWR from 'swr';

export const useFetcher = <Data>(url: string) => {
  const { data, isLoading, error, mutate } = useSWR<Data>(
    url,
    async (url: string) => {
      const { data } = await api.get(url);

      return data;
    },
  );

  return { data, isLoading, error, mutate };
};
