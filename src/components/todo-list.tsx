import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/store';
import { editToDo } from '../store/slices/list-todo';

const ToDoListItem = () => {
  const todos = useAppSelector((state) => state.listToDo);
  const [editThisToDO, setEditThisToDO] = useState(false);
  const [stateEdiToDO, setStateEditTodo] = useState('');

  const dispatch: AppDispatch = useDispatch();

  const handleEdit = () => {
    setEditThisToDO(!editThisToDO);
  };

  const handleSaveEdit = (itemIndex: number) => {
    handleEdit();
    dispatch(editToDo({ itemIndex, stateEdiToDO }));
    setStateEditTodo('');
  };

  const handleChange = (e: { target: { value: string } }) => {
    const element = e.target.value;
    setStateEditTodo(element);
  };

  return (
    <>
      {todos.map((list, listIndex) => (
        <div className="todo-group" key={listIndex}>
          {list.map((listItem, itemIndex) => (
            <div className="todo-item" key={itemIndex}>
              {!editThisToDO ? (
                <>
                  <input id={`${listIndex}-${itemIndex}`} type="checkbox" />
                  <label htmlFor={`${listIndex}-${itemIndex}`}>{listItem}</label>
                </>
              ) : (
                <input type="text" onChange={handleChange} value={stateEdiToDO} />
              )}
              {!editThisToDO ? (
                <>
                  <button>Удалить</button>
                  <button onClick={() => handleEdit()}>Редактировать</button>
                </>
              ) : (
                //TODO: Добавить в вызов функции listIndex
                <button onClick={() => handleSaveEdit(itemIndex)}>Сохранить</button>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ToDoListItem;
