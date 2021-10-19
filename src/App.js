import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import DescriptionPage from "./views/DescriptionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/jobs/:name" exact component={DescriptionPage} />
    </BrowserRouter>
  );
};

export default App;
