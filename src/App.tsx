import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';
import { useEffect } from 'react';
import { todosSlice } from './features/todos';
import { getTodos } from './api';
import { useAppDispatch } from './app/hooks';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTodos().then(todo => {
      dispatch(todosSlice.actions.setTodos(todo));
    });
  }, [dispatch]);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              <Loader />
              <TodoList />
            </div>
          </div>
        </div>
      </div>

      <TodoModal />
    </>
  );
};
