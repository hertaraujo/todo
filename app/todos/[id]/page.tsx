'use client';

import { Todo } from '@/components/todo';
import type { TodoProps } from '@/components/todo';
import { ITodo } from '@/contracts/todo';
import { useFetcher } from '@/hooks/useFetcher';
import { useParams } from 'next/navigation';

export default function TodoPage() {
  const { id } = useParams();

  const { data, isLoading } = useFetcher<ITodo>(`todos/${id}`);

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <div>Not found</div>;
  return (
    <div>
      <Todo {...data} />
    </div>
  );
}
