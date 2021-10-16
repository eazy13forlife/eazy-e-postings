import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchJobData, fetchUserLocation } from "../../actions";
import Header from "../../components/Header/Header.js";
import Dropdown from "../../components/Dropdown/Dropdown.js";

const Homepage = () => {
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => {
    return state.userLocation;
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
      <Dropdown
        title="type to select a location"
        items={[
          "Atlanta,Georgia",
          "Suwanee,Georgia",
          "Norcross,Georgia",
          "Providence,RI",
        ]}
      />
    </>
  );
};

export default Homepage;
