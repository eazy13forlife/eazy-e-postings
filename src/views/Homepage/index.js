import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchJobData, fetchUserLocation } from "../../actions";
import Header from "../../components/Header/Header.js";
import Filters from "./Filters/Filters.js";
import Results from "./Results/Results.js";

import "./index.scss";
const Homepage = () => {
  const dispatch = useDispatch();

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
          <Results />
        </div>
      </main>
    </>
  );
};

export default Homepage;
