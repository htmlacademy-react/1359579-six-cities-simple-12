import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Offer = {
  OffersCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={Offer.OffersCount}/>
  </React.StrictMode>,
);
