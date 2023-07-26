import { useTodos } from '@/hooks/useTodos';
import { api } from '@/services/api';
import Image from 'next/image';
import useSWR from 'swr';

export default function Home() {
  // const { data } = useTodos('todos');
  const { data, isLoading, error, mutate } = useSWR(
    '/todos',
    async (url: string) => {
      const { data } = await api.get(url);
      return data;
    },
  );

  return (
    <main className="bg-slate-900 text-slate-400">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl">Todos</h1>,
        <div>
          <div>
            <span>Title</span>
            <p>Description</p>
          </div>
        </div>
      </div>
    </main>
  );
}
