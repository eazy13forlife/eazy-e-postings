import React, { useState, useEffect } from "react";
import jobCard from "../JobCard/JobCard.js";

const Pagination = ({ data, pageButtonsLimit, dataLimit, cardComponent }) => {
  //totalPageButtons tells us the total number of totalPageButtons we will need to store our data. We do Math.ceil because any decimal in regards to pages means round up
  const DataCard = cardComponent;

  const [totalPageButtons] = useState(Math.ceil(data.length / data.limit));

  const [currentPageButton, setCurrentPageButton] = useState(1);
  let initialEndRange;
  if (totalPageButtons <= pageButtonsLimit) {
    initialEndRange = totalPageButtons;
  } else {
    initialEndRange = 1 * pageButtonsLimit;
  }
  const [pagesRange, setPagesRange] = useState([
    currentPageButton,
    initialEndRange,
  ]);

  const goToNextPageButton = () => {
    const nextPageButton = currentPageButton + 1;
    if (nextPageButton >= totalPageButtons) {
      setCurrentPageButton(totalPageButtons);
    } else {
      setCurrentPageButton(nextPageButton);
    }
  };

  const goToPreviousPageButton = () => {
    const previousPageButton = currentPageButton - 1;
    if (previousPageButton < 1) {
      setCurrentPageButton(1);
    } else {
      setCurrentPageButton(previousPageButton);
    }
  };

  const goToPageButton = (number) => {
    if (number >= 1 && number <= totalPageButtons) {
      setCurrentPageButton(number);
    }
  };

  //will return the posts we should show based on our dataLimit and the current page we are on. *i can call this function and map inside jsx*
  const getPaginatedData = () => {
    const firstItemIndex = currentPageButton * dataLimit - (dataLimit - 1) - 1;
    let lastItemIndex = currentPageButton * dataLimit - 1;
    if (lastItemIndex >= data.length) {
      lastItemIndex = data.length - 1;
    }

    const results = [];

    for (let i = firstItemIndex; i <= lastItemIndex; i++) {
      const singleData = data[i];
      results.push(singleData);
    }
    return results;
  };

  //[1-5],[6-10],[11-15],etc
  const getPaginatedPagesRange = () => {
    //if the current page we are on is within our current page range, don't do anything *i can call this function and map inside jsx*
    if (
      currentPageButton >= pagesRange[0] &&
      currentPageButton <= pagesRange[1]
    ) {
      return;
      //if current page is greater than the max value of our current range
    } else if (currentPageButton > pagesRange[1]) {
      const startRange = currentPageButton;
      let endRange = startRange + (pageButtonsLimit - 1);
      if (endRange > totalPageButtons) {
        endRange = totalPageButtons;
      }
      return setPagesRange([startRange, endRange]);
      //if current page is less than the min value of our current range
    } else if (currentPageButton < pagesRange[0]) {
      const endRange = currentPageButton;
      let startRange = endRange - (pageButtonsLimit - 1);
      if (startRange < 1) {
        startRange = 1;
      }
      return setPagesRange([startRange, endRange]);
    }
  };

  // I will show a max of 5 page buttons at a time, and only after page button 3 is when the pages range change.*i can call this function and map inside jsx*
  const getPaginatedPagesRange2 = (pageNumber) => {
    //get initial range
    const initialStartRange = 1;
    let initialEndRange;
    if (totalPageButtons <= pageButtonsLimit) {
      initialEndRange = totalPageButtons;
    } else {
      initialEndRange = pageButtonsLimit;
    }

    //if we havent selected past the 3rd page button or there is a max of three buttons, just return our initial ranges
    if (initialEndRange <= 3 || pageNumber <= 3) {
      return [initialStartRange, initialEndRange];
    }

    if (initialEndRange > 3 && pageNumber > 3) {
      // find the new pageNumber difference from 3
      const diff = pageNumber - 3;
      // move the startRange up this amount
      const newStartRange = initialStartRange + diff;
      // move the endRange up this amount
      let newEndRange = initialEndRange + diff;
      // if end range exceeds or equals the total number of page buttons,then the endRange will just equal the total number of page buttons.
      if (newEndRange >= totalPageButtons) {
        newEndRange = totalPageButtons;
      }
      return [newStartRange, newEndRange];
    }
  };
  console.log(data);
  const data2 = data.map((job, index) => {
    return (
      <React.Fragment key={index}>
        <DataCard data={job} />
      </React.Fragment>
    );
  });

  console.log(data2);
  return <div className="all">{data2}</div>;
};

export default Pagination;
