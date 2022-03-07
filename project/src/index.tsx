import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Offers from './mocks/offers';

const Setting = {
  HOTELS_COUNT: 50,
  Offer: Offers,
};

ReactDOM.render(
  <React.StrictMode>
    <App hotelsCount={Setting.HOTELS_COUNT} offers={Setting.Offer}/>
  </React.StrictMode>,
  document.getElementById('root'));
