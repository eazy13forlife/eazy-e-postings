import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchJobData, fetchUserLocation } from "../../actions";
import Header from "../../components/Header/Header.js";
import Filters from "./Filters/Filters.js";
import Results from "./Results/Results.js";

import "./index.scss";

const Homepage = () => {
  const dispatch = useDispatch();

  const currentPage = +useParams().page;

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

  //the current page button we are on, so we can pass to Results component
  let currentPageButton;

  if (!currentPage) {
    currentPageButton = 1;
  } else {
    currentPageButton = +currentPage;
  }

  return (
    <>
      <Header />
      <main className="HomeBody">
        <div className="container">
          <Filters />
          <Results currentPageButton={currentPageButton} />
        </div>
      </main>
    </>
  );
};

export default Homepage;
