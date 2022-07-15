import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchJobData, fetchUserLocation } from "../../actions";
import Header from "../../components/Header/Header.js";
import Filters from "./Filters/Filters.js";
import Results from "./Results/Results.js";

import "./index.scss";
const Homepage = (ownProps) => {
  //the current page button we are on of our pagination, taken from the url. If nothing is in url, we will assume that we are on the first page.
  let currentPageButton;
  if (!ownProps.match.params.page) {
    currentPageButton = 1;
  } else {
    currentPageButton = +ownProps.match.params.page;
  }

  const dispatch = useDispatch();

  const sortedJobData = useSelector((state) => {
    return state.sortedJobData;
  });

  useEffect(() => {
    const getInitialValues = async () => {
      await dispatch(fetchUserLocation());
      dispatch(fetchJobData());
    };

    getInitialValues();
  }, []);

  return (
    <>
      <Header />
      <main className="Homepage">
        <div className="container">
          <Filters />
          <Results currentPageButton={currentPageButton} />
        </div>
      </main>
    </>
  );
};

export default Homepage;
