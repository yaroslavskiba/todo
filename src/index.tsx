import React from 'react';
import ReactDOM from 'react-dom/client';
// import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
// import { useAppSelector } from './store/store';

const App = () => {
  // const dispatch = useDispatch();
  // const todos = useAppSelector((state) => state.listToDo);

  return (
    <>
      <h1>ToDo App Yaroslavskiba</h1>
      {/* <button>Добавить TODO</button> */}
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
