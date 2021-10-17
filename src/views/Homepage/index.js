import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchJobData, fetchUserLocation } from "../../actions";
import Header from "../../components/Header/Header.js";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import SelectBox from "../../components/SelectBox";
import countryCodes from "../../countryCodes.js";

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
      <Dropdown title="type to select a location" items={["Atlanta,Georgia"]} />
      <SelectBox title="Country" items={countryCodes} />
    </>
  );
};

export default Homepage;
