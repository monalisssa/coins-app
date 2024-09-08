import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AddedCoinsProvider } from './context/AddedCoinsContext';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <AddedCoinsProvider>
      <App />
    </AddedCoinsProvider>
  </BrowserRouter>,
);
