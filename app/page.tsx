'use client';

import { useFetcher } from '@/hooks/useFetcher';
import { ITodo } from '@/contracts/todo';
import Link from 'next/link';
import { useCallback } from 'react';
import { api } from '@/services/api';
import { mutate as mutateGlobal } from 'swr';

export default function Home() {
  const { data, isLoading, mutate } = useFetcher<ITodo[]>('todos');

  const todoChangeHandler = useCallback(
    (id: number) => {
      api.put(`todos/${id}`, { title: 'phone', description: 'Check phone' });

      const updatedTodos = data?.map((user) => {
        if (user.id === id) {
          return { ...user, name: 'Bartolomeu' };
        }

        return user;
      });

      mutate(updatedTodos, false);
      mutateGlobal(`todos/${id}`, {
        title: 'phone',
        description: 'Check phone',
      });
    },
    [data, mutate],
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl">Todos</h1>
      <ul>
        {data?.map(({ id, title }) => (
          <li className="flex items-center gap-2" key={id}>
            <Link href={`todos/${id}`}>
              <span className="bg-slate-700 p-2 text-xl transition hover:underline">
                {title}
              </span>
            </Link>
            <button
              className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              type="button"
              onClick={() => todoChangeHandler(id)}
            >
              Change
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
