import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const titles = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

ReactDOM.render(
    <App
      titles={titles}
    />,
    document.querySelector(`#root`)
);
