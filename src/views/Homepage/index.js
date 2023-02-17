import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchJobData, fetchUserLocation } from "../../actions";
import Header from "../../components/Header/Header.js";
import Filters from "./Filters/Filters.js";
import Results from "./Results/Results.js";

import "./index.scss";

const Homepage = (ownProps) => {
  const [searchParams] = useSearchParams();

  //the current page button we are on, so we can pass to Results component
  let currentPageButton;

  if (!searchParams.get("page")) {
    currentPageButton = 1;
  } else {
    currentPageButton = +ownProps.match.params.page;
  }

  const dispatch = useDispatch();

  const userLocation = useSelector((state) => {
    return state.userLocation;
  });

  useEffect(() => {
    const getInitialValues = async () => {
      await dispatch(fetchUserLocation());
      dispatch(fetchJobData());
    };

    if (!userLocation) {
      getInitialValues();
    }
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
