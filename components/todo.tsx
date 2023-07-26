import { FC } from 'react';

export type TodoProps = {
  title: string;
  description: string;
};

export const Todo: FC<TodoProps> = ({ description, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
