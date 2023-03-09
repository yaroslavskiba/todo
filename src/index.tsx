import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <h1>Privet</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>,
);
