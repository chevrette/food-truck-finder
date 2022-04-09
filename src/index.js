import React from 'react';
import { createRoot } from 'react-dom/client';
import { LocationProvider } from './context/locationContext';
import App from './App';
import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>,
);
