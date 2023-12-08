import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// корень проекта
const root = ReactDOM.createRoot(document.getElementById('root'));
// внутри корня проекта должна отрисоватся компонента под названием App
root.render(
    <App />
);