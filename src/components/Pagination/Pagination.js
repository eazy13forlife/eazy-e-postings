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
  //range of buttons we will show on screen. For example if range is 5, 5 sequential page buttons need to be displayed
  buttonsRange,
  //max amount of data we will show on one page
  dataLimit,
  cardComponent,
  currentPageButton,
}) => {
  const navigate = useNavigate();

  const DataCard = cardComponent;

  const getTotalPageButtons = () => {
    return Math.ceil(data.length / dataLimit);
  };

  //the total number of page buttons we will need to store our data depending on the dataLimit
  const [totalPageButtons, setTotalPageButtons] = useState(
    getTotalPageButtons()
  );

  //page button we are currently on
  const [pageButton, setPageButton] = useState(currentPageButton);

  //when our data changes, check to see if we need to update the total number of page buttons.
  //For example, data size might be larger/smaller now
  useEffect(() => {
    setTotalPageButtons(getTotalPageButtons());
  }, [data]);

  //when we go forward and backward on history object, we get a new page paramater value
  // so we have to update our pageButton state to reflect the current page we're on,
  // otherwise it keeps the initial page value used when component first mounted
  useEffect(() => {
    setPageButton(currentPageButton);
  }, [currentPageButton]);

  //all the rendered jobs depending on the page we're on and the data limit
  const renderedData = getPaginatedData(data, pageButton, dataLimit).map(
    (job, index) => {
      return (
        <React.Fragment key={index}>
          <DataCard data={job} />
        </React.Fragment>
      );
    }
  );

  const renderedPageButtons = getPaginatedPagesRange(
    totalPageButtons,
    buttonsRange,
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
      <div className="Pagination__data">
        {renderedData.length ? (
          renderedData.length
        ) : (
          <p className="Results__none text-large">No results found.</p>
        )}
      </div>

      <div className="Pagination__page-group">
        <BiLeftArrow
          className="Pagination__icon Pagination__button"
          onClick={() => {
            goToPreviousPageButton(pageButton, setPageButton);
            updateHistoryBackward(pageButton, navigate);
          }}
        />
        {renderedPageButtons}
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
