import React from 'react';
import './App.module.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
