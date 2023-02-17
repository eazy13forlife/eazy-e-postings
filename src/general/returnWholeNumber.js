//removes any commas from number strings and rounds to
//nearest whole number
const returnWholeNumber = (number) => {
  const newNumber = number.replace(/,/g, "");

  return Math.round(newNumber);
};

export default returnWholeNumber;
