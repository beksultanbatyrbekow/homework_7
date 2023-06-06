import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Example from './App';
import Timer from './components/Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Example />
        <Timer/>
    </React.StrictMode>
);
