import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { CtxProvider } from './services/Ctx';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CtxProvider>
      <BrowserRouter>
        <Reset />
        <App />
      </BrowserRouter>
    </CtxProvider>
  </React.StrictMode>
);
