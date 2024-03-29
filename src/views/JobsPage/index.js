import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Header from "../../components/Header/Header.js";
import Filters from "../../components/Filters/Filters";
import Results from "./Results/Results";
import { fetchJobData, updateAllSearchParams } from "../../actions";
import NavigationFunctionContext from "./navigateFunctionContext";
import useGoToJobsPage from "../../hooks/useGoToJobsPage";
import defaultSearchInfo from "../../general/defaultSearchInfo";
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

  let parsedSearchInfo;

  //if error exists getting searchInfo data from encoded
  //uri, just return our default search object
  try {
    parsedSearchInfo = JSON.parse(decodeURIComponent(searchInfo));
  } catch {
    parsedSearchInfo = defaultSearchInfo;
  }

  const navigateToPage = (page) => {
    goToJobsPage(parsedSearchInfo, page);
  };

  //on initial render and every time searchInfo param changes values, we update all search
  // params(in case we just navigated to this page directly) and then get the
  //relevant job data according to the search params. When
  //page number changes for this search info, we don't
  //want to run this function again, because we
  //don't want to fetch new job data. we are using
  //existing job data and paginating info from there
  useEffect(() => {
    dispatch(updateAllSearchParams(parsedSearchInfo));

    dispatch(fetchJobData());
  }, [searchInfo]);

  return (
    <>
      <Header />
      <main className="Results">
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
