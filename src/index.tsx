import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.module.css';
import App from './App';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
