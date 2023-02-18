import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Header from "../../components/Header/Header.js";
import Filters from "../../components/Filters/Filters";
import Results from "../Homepage/Results/Results.js";
import { fetchJobData, updateAllSearchParams } from "../../actions";
import "./index.scss";

const JobsPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const searchInfo = searchParams.get("info");

  const page = +searchParams.get("page");

  const parsedSearchInfo = JSON.parse(decodeURIComponent(searchInfo));

  //on initial render, update all search params(in case we just navigated to this page
  //directly) and then get the relevant job data according to the search params
  useEffect(() => {
    console.log("ds");
    dispatch(updateAllSearchParams(parsedSearchInfo));

    dispatch(fetchJobData());
  }, [parsedSearchInfo, page]);

  return (
    <>
      <Header />
      <main className="HomeBody">
        <div className="container">
          <Filters />
          <Results currentPageButton={page} />
        </div>
      </main>
    </>
  );
};

export default JobsPage;
