const goToNextPageButton = (
  totalPageButtons,
  currentPageButton,
  updateButtonFunction
) => {
  const nextPageButton = currentPageButton + 1;

  const newPageButton = Math.min(nextPageButton, totalPageButtons);

  updateButtonFunction(newPageButton);
};

const updateHistoryForward = (totalPageButtons, currentPageButton, update) => {
  const nextPageButton = currentPageButton + 1;

  const newPageButton = Math.min(nextPageButton, totalPageButtons);

  update(`/${newPageButton}`);
};

const goToPreviousPageButton = (currentPageButton, updateButtonFunction) => {
  const previousPageButton = currentPageButton - 1;

  const newPageButton = Math.max(1, previousPageButton);

  updateButtonFunction(newPageButton);
};

const updateHistoryBackward = (currentPageButton, update) => {
  const previousPageButton = currentPageButton - 1;

  const newPageButton = Math.max(1, previousPageButton);

  update(`/${newPageButton}`);
};

const goToPageButton = (totalPageButtons, pageNumber, updateButtonFunction) => {
  if (pageNumber >= 1 && pageNumber <= totalPageButtons) {
    updateButtonFunction(pageNumber);
  }
};

const updateHistorySpecific = (totalPageButtons, pageNumber, update) => {
  if (pageNumber <= 1) {
    update(`/`);
  }

  if (pageNumber <= totalPageButtons) {
    update(`/${pageNumber}`);
  }
};

//will return the posts we should show based on our dataLimit and the current
// page we are on.
const getPaginatedData = (data, currentPageButton, dataLimit) => {
  const firstItemIndex = currentPageButton * dataLimit - (dataLimit - 1) - 1;

  let lastItemIndex = currentPageButton * dataLimit - 1;

  if (lastItemIndex >= data.length) {
    lastItemIndex = data.length - 1;
  }

  const results = [];

  for (let i = firstItemIndex; i <= lastItemIndex; i++) {
    const jobPost = data[i];

    results.push(jobPost);
  }

  return results;
};

// I will show a max of 5 page buttons at a time, and only after page button 3 is when the pages range change.
const getPaginatedPagesRange = (
  totalPageButtons,
  pageButtonsLimit,
  pageButton
) => {
  //get initial base range to work from
  const initialStartRange = 1;

  let initialEndRange;

  if (totalPageButtons <= pageButtonsLimit) {
    initialEndRange = totalPageButtons;
  } else {
    initialEndRange = pageButtonsLimit;
  }

  //if we havent selected past the 3rd page button or if initialEndRange ends at  three pageButtonsLimit, just return our initial ranges
  if (initialEndRange <= 3 || pageButton <= 3) {
    return turnRangeToArray([initialStartRange, initialEndRange]);
  }

  //if initialEndRange is greater than 3 and we select a page button greater than
  // 3 then we can update our range. Let's say we have a range from 1-4
  if (initialEndRange > 3 && pageButton > 3) {
    // find the new pageButton difference from 3
    const diff = pageButton - 3;

    // move the startRange up this amount
    let newStartRange = initialStartRange + diff;

    // move the endRange up this amount
    let newEndRange = initialEndRange + diff;

    // if newEndRange exceeds or equals the total number of page buttons,then the newEndRange should just equal the total number of page buttons.
    if (newEndRange >= totalPageButtons) {
      newEndRange = totalPageButtons;
    }

    //we want to update our startRange to make sure we are showing pageButtonsLimit at once, if possible or totalPageButtons otherwise.
    newStartRange = checkStartRange(
      newStartRange,
      newEndRange,
      totalPageButtons,
      pageButtonsLimit
    );

    return turnRangeToArray([newStartRange, newEndRange]);
  }
};

//updates startRange
const checkStartRange = (
  startRange,
  endRange,
  totalPageButtons,
  pageButtonsLimit
) => {
  //if the total number of page buttons is greater than our pageButtonsLimit, this
  // means we will always be able to show pageButtonsLimit at one time. so if the
  // limit is 5, we will always be able to show five buttons at once, so we
  // decrease our start range till we are showing pageButtonsLimit amount
  if (totalPageButtons >= pageButtonsLimit) {
    while (endRange - startRange + 1 !== pageButtonsLimit) {
      startRange = startRange - 1;
    }
    //if the total page buttons is less than our pageButtonsLimit, that means we
    // just want to decrease startRange until we have same number of buttons as
    // totalPageButtons
  } else {
    while (endRange - startRange + 1 !== totalPageButtons) {
      startRange = startRange - 1;
    }
  }
  return startRange;
};

//an array we will map over to create our number buttons
const turnRangeToArray = (range) => {
  let result = [];

  let start = range[0];

  let end = range[1];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};

export {
  goToNextPageButton,
  goToPreviousPageButton,
  goToPageButton,
  getPaginatedData,
  getPaginatedPagesRange,
  updateHistoryForward,
  updateHistoryBackward,
  updateHistorySpecific,
};
