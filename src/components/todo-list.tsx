import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/store';
import { editToDo } from '../store/slices/list-todo';

const ToDoListItem = () => {
  const todos = useAppSelector((state) => state.listToDo);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [stateEditToDO, setStateEditTodo] = useState('');

  const dispatch: AppDispatch = useDispatch();

  const handleEdit = (itemIndex: number) => {
    setEditingIndex(itemIndex);
  };

  const handleSaveEdit = (listIndex: number, itemIndex: number) => {
    dispatch(editToDo({ listIndex, itemIndex, stateEditToDO }));
    setEditingIndex(-1);
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
              <input id={`${listIndex}-${itemIndex}`} type="checkbox" />
              {editingIndex === itemIndex ? (
                <input type="text" onChange={handleChange} value={stateEditToDO} />
              ) : (
                <label htmlFor={`${listIndex}-${itemIndex}`}>{listItem}</label>
              )}
              {editingIndex === itemIndex ? (
                <button onClick={() => handleSaveEdit(listIndex, itemIndex)}>Сохранить</button>
              ) : (
                <>
                  <button className="button-icon delete-edit">Удалить</button>
                  <button className="button-icon delete-edit" onClick={() => handleEdit(itemIndex)}>
                    Редактировать
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ToDoListItem;
