import React from 'react';
import './Loader.scss';
import { useAppSelector } from '../../app/hooks';

export const Loader: React.FC = () => {
  const todos = useAppSelector(state => state.todos);
  const isLoading = todos.length === 0;

  if (!isLoading) {
    return null;
  }

  return (
    <div className="Loader" data-cy="loader">
      <div className="Loader__content" />
    </div>
  );
};
