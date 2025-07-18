import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Only register service worker in production and on HTTPS or localhost
if (
  process.env.NODE_ENV === 'production' &&
  (window.location.protocol === 'https:' || window.location.hostname === 'localhost')
) {
  serviceWorkerRegistration.register();
} else {
  serviceWorkerRegistration.unregister();
}

export interface FlashcardSet {
  // ...fields...
  flashcards?: FlashcardSet[];
  // ...other fields...
}
