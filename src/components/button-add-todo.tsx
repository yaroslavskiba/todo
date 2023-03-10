import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/list-todo';

interface Props {
  setEdit: (value: boolean) => void;
}

const ToDoList = ({ setEdit }: Props) => {
  const dispatch = useDispatch();
  const [inputCount, setInputCount] = useState(1);
  const [inputValues, setInputValues] = useState(['']);

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
    dispatch(
      addTodo({
        todos: inputValues,
      }),
    );
    setEdit(false);
  };

  const inputs = [];
  for (let i = 0; i < inputCount; i++) {
    inputs.push(
      <input key={i} type="text" value={inputValues[i]} onChange={(e) => handleInputChange(i, e.target.value)} />,
    );
  }

  return (
    <>
      {inputs}
      <button onClick={addInput}>добавить todo в список</button>
      <button onClick={handleSaveButtonClick}>Сохранить</button>
    </>
  );
};

export default ToDoList;
