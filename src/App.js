import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobsPage from "./views/JobsPage";
import DescriptionPage from "./views/DescriptionPage";
import EntryPage from "./views/EntryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* get all jobs around user,not applying anything */}
        <Route path="/" exact element={<EntryPage />} />
        {/* get all jobs that fit a certain criteria we need info query param and
        page param */}
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:title/:id" element={<DescriptionPage />} />
        <Route path="*" element={<EntryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
