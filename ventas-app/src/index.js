import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CardProvider } from './context/CardContext';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <CardProvider>
        <App />
    </CardProvider>
);
