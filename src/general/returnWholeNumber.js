const returnWholeNumber = (number) => {
  const newNumber = number.replace(/,/g, "");
  return Math.round(newNumber);
};

export default returnWholeNumber;
