import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import DescriptionPage from "./views/DescriptionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:page" element={<Homepage />} />
        <Route path="/jobs/:title+/:id" element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
