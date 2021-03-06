import React, { useState, useEffect } from "react";

import {
  goToNextPageButton,
  goToPreviousPageButton,
  goToPageButton,
  getPaginatedData,
  getPaginatedPagesRange,
  updateHistoryForward,
  updateHistoryBackward,
  updateHistorySpecific,
} from "./functions.js";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./Pagination.scss";

const Pagination = ({
  data,
  pageButtonsLimit,
  dataLimit,
  cardComponent,
  currentPageButton,
}) => {
  //totalPageButtons tells us the total number of totalPageButtons we will need to store our data. We do Math.ceil because any decimal in regards to pages means round up

  const DataCard = cardComponent;

  const [totalPageButtons] = useState(Math.ceil(data.length / dataLimit));

  const [pageButton, setPageButton] = useState(currentPageButton);

  //when our currentPageButton prop changes,update our pageButton state for when our component re-renders, so the right results can be fetched
  useEffect(() => {
    setPageButton(currentPageButton);
  }, [currentPageButton]);

  const renderedData = getPaginatedData(data, pageButton, dataLimit).map(
    (job, index) => {
      return (
        <React.Fragment key={index}>
          <DataCard data={job} />
        </React.Fragment>
      );
    }
  );

  const renderedPagesRange = getPaginatedPagesRange(
    totalPageButtons,
    pageButtonsLimit,
    pageButton
  ).map((pageNumber, index) => {
    const isSelected = pageButton === pageNumber;
    return (
      <button
        key={index}
        className={`button-3 button-3--primary Pagination__button ${
          isSelected ? "Pagination__button--selected" : null
        }`}
        onClick={() => {
          goToPageButton(totalPageButtons, pageNumber, setPageButton);
          updateHistorySpecific(totalPageButtons, pageNumber);
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
            goToPreviousPageButton(pageButton, setPageButton);
            updateHistoryBackward(pageButton);
          }}
        />
        {renderedPagesRange}
        <BiRightArrow
          className="Pagination__icon Pagination__button "
          onClick={() => {
            goToNextPageButton(totalPageButtons, pageButton, setPageButton);
            updateHistoryForward(totalPageButtons, pageButton);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Pagination;
