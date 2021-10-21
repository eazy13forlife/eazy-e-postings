const returnWholeNumber = (number) => {
  const newNumber = number.replace(/,/g, "");
  console.log(Math.round(newNumber));
  return Math.round(newNumber);
};

export default returnWholeNumber;
