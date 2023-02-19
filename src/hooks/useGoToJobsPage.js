import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useGoToJobsPage = () => {
  const navigate = useNavigate();

  const navigateFunction = (searchParams, page) => {
    const encodedURL = encodeURIComponent(JSON.stringify(searchParams));

    navigate(`/jobs?info=${encodedURL}&page=${page}`);
  };

  return navigateFunction;
};

export default useGoToJobsPage;
