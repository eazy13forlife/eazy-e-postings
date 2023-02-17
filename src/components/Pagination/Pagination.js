import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

const Pagination = ({
  data,
  pageButtonsLimit,
  dataLimit,
  cardComponent,
  currentPageButton,
}) => {
  const navigate = useNavigate();

  const DataCard = cardComponent;

  //the total number of totalPageButtons we will need to store our data. We do Math.ceil because any decimal in regards to pages means round up
  const [totalPageButtons] = useState(Math.ceil(data.length / dataLimit));

  const [pageButton, setPageButton] = useState(currentPageButton);

  //when our currentPageButton prop changes,update our pageButton state
  useEffect(() => {
    setPageButton(currentPageButton);
  }, [currentPageButton]);

  //all the rendered job depending on page we're on and data limit
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
          updateHistorySpecific(totalPageButtons, pageNumber, navigate);
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
            updateHistoryBackward(pageButton, navigate);
          }}
        />
        {renderedPagesRange}
        <BiRightArrow
          className="Pagination__icon Pagination__button "
          onClick={() => {
            goToNextPageButton(totalPageButtons, pageButton, setPageButton);
            updateHistoryForward(totalPageButtons, pageButton, navigate);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Pagination;
