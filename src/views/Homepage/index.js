import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchJobData, fetchUserLocation } from "../../actions";
const clearbit = require("clearbit")("sk_c5daacea98950094e1bdb4c891d21995");

const SearchPage = () => {
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

  return <button>he</button>;
};

export default SearchPage;
