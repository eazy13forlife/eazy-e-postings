import React, { useState, useEffect, useContext } from "react";

import navigateFunctionContext from "../../views/JobsPage/navigateFunctionContext";
import {
  getPaginatedData,
  getPaginatedPagesRange,
  goToNextPage,
  goToPreviousPage,
  goToPage,
} from "./functions.js";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Pagination = ({
  data,
  //range of buttons we will show on screen. For example if range is 5, 5 sequential page buttons need to be displayed
  buttonsRange,
  //max amount of data we will show on one page
  dataLimit,
  cardComponent,
  currentPage,
}) => {
  const navigateToPage = useContext(navigateFunctionContext);

  const DataCard = cardComponent;

  const getTotalPages = () => {
    return Math.ceil(data.length / dataLimit);
  };

  //the total number of pages to store our data, depending on the dataLimit
  const [totalPages, setTotalPages] = useState(getTotalPages());

  //page we are currently on
  const [page, setPage] = useState(currentPage);

  //when our data changes, update the total number of pages,if necessary.
  //For example, data size might be larger/smaller now
  useEffect(() => {
    setTotalPages(getTotalPages());
  }, [data]);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  //all the rendered jobs depending on the page we're on and the data limit
  const renderedData = getPaginatedData(data, page, dataLimit).map(
    (job, index) => {
      return (
        <React.Fragment key={index}>
          <DataCard data={job} />
        </React.Fragment>
      );
    }
  );

  const renderedPageButtons = getPaginatedPagesRange(
    totalPages,
    buttonsRange,
    page
  ).map((pageNumber, index) => {
    const isSelected = page === pageNumber;

    return (
      <button
        key={index}
        className={`button-3 button-3--primary Pagination__button ${
          isSelected ? "Pagination__button--selected" : null
        }`}
        onClick={() => {
          goToPage(totalPages, pageNumber, navigateToPage);
        }}
      >
        {pageNumber}
      </button>
    );
  });

  return (
    <React.Fragment>
      <div className="Pagination__data">{renderedData}</div>

      <div className="Pagination__page-group">
        <BiLeftArrow
          className="Pagination__icon Pagination__button"
          onClick={() => {
            goToPreviousPage(page, navigateToPage);
          }}
        />
        {renderedPageButtons}
        <BiRightArrow
          className="Pagination__icon Pagination__button "
          onClick={() => {
            goToNextPage(totalPages, page, navigateToPage);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Pagination;
