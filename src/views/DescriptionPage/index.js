import React from "react";
import Header from "../../components/Header/Header.js";

import "./index.scss";

const DescriptionPage = (ownProps) => {
  console.log(ownProps);
  return (
    <>
      <Header />
      <main className="DescriptionPage"></main>
    </>
  );
};

export default DescriptionPage;
