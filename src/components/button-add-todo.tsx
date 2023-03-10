import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/list-todo';
import { AppDispatch } from '../store/store';

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
    <input key={`input-${i}`} type="text" value={value} onChange={(e) => handleInputChange(i, e.target.value)} />
  ));

  return (
    <>
      {inputs}
      <button onClick={addInput}>добавить todo в список</button>
      <button onClick={handleSaveButtonClick}>Сохранить</button>
    </>
  );
};

export default ToDoList;
