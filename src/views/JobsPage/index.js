import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Header from "../../components/Header/Header.js";
import Filters from "../../components/Filters/Filters";
import Results from "./Results/Results";
import { fetchJobData, updateAllSearchParams } from "../../actions";
import NavigationFunctionContext from "./navigateFunctionContext";
import useGoToJobsPage from "../../hooks/useGoToJobsPage";
import "./index.scss";

const JobsPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const goToJobsPage = useGoToJobsPage();

  //encoded uri string that contains our searchParams info
  const searchInfo = searchParams.get("info");

  let page = +searchParams.get("page");

  if (page <= 0 || isNaN(page)) {
    page = 1;
  }

  //returns the parsed searchParams info
  const parsedSearchInfo = JSON.parse(decodeURIComponent(searchInfo));

  const navigateToPage = (page) => {
    goToJobsPage(parsedSearchInfo, page);
  };

  //on initial render and every time searchInfo param changes values, we update all search
  // params(in case we just navigated to this page directly) and then get the
  //relevant job data according to the search params.When our page changes, we don't
  //want to run this function again, because we are not fetching new job data. we are using
  //existing job data and paginated info from there
  useEffect(() => {
    dispatch(updateAllSearchParams(parsedSearchInfo));

    dispatch(fetchJobData());
  }, [searchInfo]);

  return (
    <>
      <Header />
      <main className="HomeBody">
        <div className="container">
          <Filters />
          <NavigationFunctionContext.Provider value={navigateToPage}>
            <Results currentPage={page} />
          </NavigationFunctionContext.Provider>
        </div>
      </main>
    </>
  );
};

JobsPage.ContextType = NavigationFunctionContext;

export default JobsPage;
