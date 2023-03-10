import React from 'react';
import { useAppSelector } from '../store/store';

const ToDoListItem = () => {
  const todos = useAppSelector((state) => state.listToDo);
  // TODO: добавить возможность удалять и редактировать todo.
  return (
    <>
      {todos.map((list, listIndex) => (
        <div className="todo-group" key={listIndex}>
          {list.map((listItem, itemIndex) => (
            <div className="todo-item" key={itemIndex}>
              <input id={`${listIndex}-${itemIndex}`} type="checkbox" />
              <label htmlFor={`${listIndex}-${itemIndex}`}>{listItem}</label>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ToDoListItem;
