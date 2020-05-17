import React from "react";
import PropTypes from "prop-types";

import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {
    offers,
    onTitleClick,
  } = props;

  return <MainScreen
    offers={ offers }
    onTitleClick={ onTitleClick }
  />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default App;
