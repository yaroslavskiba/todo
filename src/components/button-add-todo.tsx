import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/list-todo';
import { AppDispatch } from '../store/store';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { TfiSaveAlt } from 'react-icons/tfi';

interface Props {
  setEdit: (value: boolean) => void;
}

const ToDoList = ({ setEdit }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [inputCount, setInputCount] = useState(1);
  const [inputValues, setInputValues] = useState<string[]>(['']);

  const addInput = () => {
    setInputCount(inputCount + 1);
    setInputValues([...inputValues, '']);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSaveButtonClick = () => {
    dispatch(addTodo(inputValues));
    setEdit(false);
  };

  const inputs = inputValues.map((value, i) => (
    <input
      key={`input-${i}`}
      type="text"
      value={value}
      placeholder="here your todo"
      onChange={(e) => handleInputChange(i, e.target.value)}
    />
  ));

  return (
    <div className="item-todo-list">
      <div className="list-item">{inputs}</div>
      <div className="control-buttons">
        <button className="button-icon" onClick={addInput}>
          <AiOutlineAppstoreAdd />
        </button>
        <button className="button-icon" onClick={handleSaveButtonClick}>
          <TfiSaveAlt />
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
