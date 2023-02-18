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

  let currentPage = +useParams().page;

  if (!currentPage) {
    currentPage = 1;
  }

  const userLocation = useSelector((state) => {
    return state.userLocation;
  });

  //on initial render, if no user location, set one and then fetch job data to display
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
      <main className="HomeBody">
        <div className="container">
          <Filters />
          <Results currentPageButton={currentPage} />
        </div>
      </main>
    </>
  );
};

export default Homepage;
