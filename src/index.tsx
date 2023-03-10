import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import ToDoList from './components/button-add-todo';
import './index.css';
import ToDoListItem from './components/todo-list';

const App = () => {
  const [edit, setEdit] = useState(false);
  const handleClickCreate = () => {
    setEdit(true);
  };
  return (
    <>
      <h1>ToDo App by Yaroslavskiba</h1>
      {!edit ? (
        <div className="todo-container">
          <div className="todo-add">
            <button className="add-item" onClick={handleClickCreate}>
              Добавить todo
            </button>
          </div>
          <div className="todo-list">
            <ToDoListItem />
          </div>
        </div>
      ) : (
        <ToDoList setEdit={setEdit} />
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
