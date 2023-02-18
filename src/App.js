import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import JobsPage from "./views/JobsPage";
import DescriptionPage from "./views/DescriptionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* get all jobs around user,not applying anything */}
        <Route path="/" exact element={<Homepage />} />
        {/* get all jobs that fit a certain criteria we need info query param and
        page param */}
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:title/:id" element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
