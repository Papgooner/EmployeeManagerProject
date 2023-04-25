import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import StartPage from './Pages/StartPage';
import HomePage from './Pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/Login" element={<StartPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
