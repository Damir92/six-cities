import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import offers from './mocks/offers';

const clickHandler = (evt) => {
  evt.preventDefault();
  console.log(`Click`); // eslint-disable-line no-console
};

ReactDOM.render(
    <App
      offers={ offers }
      onTitleClick={ clickHandler }
    />,
    document.querySelector(`#root`)
);
