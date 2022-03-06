import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Comments from './mocks/comments';
import Offers from './mocks/offers';

const Setting = {
  HOTELS_COUNT: 50,
  Comments: Comments,
  Offer: Offers,
};

ReactDOM.render(
  <React.StrictMode>
    <App hotelsCount={Setting.HOTELS_COUNT} offers={Setting.Offer} comments={Setting.Comments}/>
  </React.StrictMode>,
  document.getElementById('root'));
