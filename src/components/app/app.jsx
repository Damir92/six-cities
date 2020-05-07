import React from "react";
import PropTypes from "prop-types";

import MainScreen from "../main-screen/main-screen.jsx";

const titleHandler = () => {};

const App = (props) => {
  const {titles} = props;

  return <MainScreen
    titles={titles}
    onTitleClick={titleHandler}
  />;
};

App.propTypes = {
  titles: PropTypes.array
};

export default App;
