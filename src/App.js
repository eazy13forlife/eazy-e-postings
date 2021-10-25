import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history.js";

import Homepage from "./views/Homepage";
import DescriptionPage from "./views/DescriptionPage";

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={(props) => <Homepage {...props} />} />
      <Route
        path="/jobs/:name"
        component={(props) => <DescriptionPage {...props} />}
      />
    </Router>
  );
};

export default App;
