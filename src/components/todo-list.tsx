import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/store';
import { editElementToDo, deleteElementToDo, deleteListToDo } from '../store/slices/list-todo';
import { TfiSaveAlt } from 'react-icons/tfi';
import { AiOutlineDeleteRow } from 'react-icons/ai';
import { RiImageEditLine } from 'react-icons/ri';
import { TiDocumentDelete } from 'react-icons/ti';

const ToDoListItem = () => {
  const todos = useAppSelector((state) => state.listToDo);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [stateEditToDO, setStateEditTodo] = useState('');

  const dispatch: AppDispatch = useDispatch();

  const handleEdit = (itemIndex: number) => {
    setEditingIndex(itemIndex);
  };

  const handleSaveEdit = (listIndex: number, itemIndex: number) => {
    dispatch(editElementToDo({ listIndex, itemIndex, stateEditToDO }));
    setEditingIndex(-1);
    setStateEditTodo('');
  };

  const handleChange = (e: { target: { value: string } }) => {
    const element = e.target.value;
    setStateEditTodo(element);
  };

  const handleDelete = (listIndex: number, itemIndex: number) => {
    dispatch(deleteElementToDo({ listIndex, itemIndex }));
  };

  const handleDeleteList = (listIndex: number) => {
    dispatch(deleteListToDo({ listIndex }));
  };

  return (
    <>
      {todos.map((list, listIndex) => (
        <div className="todo-group" key={`list-${listIndex}`}>
          {list.map((listItem, itemIndex) => (
            <div className="todo-item" key={`item-${listIndex}-${itemIndex}`}>
              {editingIndex === itemIndex ? (
                <input type="text" onChange={handleChange} value={stateEditToDO} key={`edit-input-${itemIndex}`} />
              ) : (
                <>
                  <input id={`checkbox-${listIndex}-${itemIndex}`} type="checkbox" key={`checkbox-${itemIndex}`} />
                  <label htmlFor={`checkbox-${listIndex}-${itemIndex}`} key={`label-${itemIndex}`}>
                    {listItem}
                  </label>
                </>
              )}
              {editingIndex === itemIndex ? (
                <button
                  className="button-icon"
                  onClick={() => handleSaveEdit(listIndex, itemIndex)}
                  key={`save-button-${itemIndex}`}
                >
                  <TfiSaveAlt />
                </button>
              ) : (
                <>
                  <button
                    className="button-icon"
                    onClick={() => handleDelete(listIndex, itemIndex)}
                    key={`delete-button-${itemIndex}`}
                  >
                    <AiOutlineDeleteRow />
                  </button>
                  <button
                    className="button-icon"
                    onClick={() => handleEdit(itemIndex)}
                    key={`edit-button-${itemIndex}`}
                  >
                    <RiImageEditLine />
                  </button>
                </>
              )}
            </div>
          ))}
          <button
            className="button-icon"
            onClick={() => handleDeleteList(listIndex)}
            key={`delete-list-button-${listIndex}`}
          >
            <TiDocumentDelete />
          </button>
        </div>
      ))}
    </>
  );
};

export default ToDoListItem;
