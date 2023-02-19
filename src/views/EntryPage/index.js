import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserLocation } from "../../actions";
import JobSearchForm from "../../components/JobSearchForm";
import "./index.scss";

const EntryPage = () => {
  const dispatch = useDispatch();

  const userLocation = useSelector((state) => {
    return state.userLocation;
  });

  //on initial render, if no user location, set one
  useEffect(() => {
    const getInitialValues = async () => {
      await dispatch(fetchUserLocation());
    };

    if (!userLocation) {
      getInitialValues();
    }
  }, []);

  return (
    <div className="EntryPage">
      <div className="container">
        <p className="logo">
          <span className="bold">Eazy-E</span> Postings
        </p>
        <div className="EntryPage__job-search">
          <h1 className="EntryPage__heading">
            Find the <span className="color-tertiary">right</span> fit.
          </h1>
          <JobSearchForm />
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
