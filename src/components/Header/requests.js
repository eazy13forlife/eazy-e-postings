import axios from "axios";
import countryCodes from "../../countryCodes.js";

//fetches location results based on user's location search value
const fetchLocationOptions = async (locationValue) => {
  try {
    const response = await axios.get(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      {
        headers: {
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key":
            "f5ccaa0bb8msh63eb609ff46e586p12f55djsn8088bb1da5d6",
        },
        params: { namePrefix: locationValue },
      }
    );
    return createLocationOptions(response.data.data);
  } catch {
    return [];
  }
};

//creates our array of location options that we want user to choose from
const createLocationOptions = (result) => {
  // we only want 5 items from our results, even if results shows 100
  let results = [];
  let i = 0; //i will iterate our result array
  let amountFetched = 0; //keeps track of the actual items we have collected
  //while amountFetched is less than 5 and we still have items in our array to iterate
  while (amountFetched < 5 && i < result.length) {
    const location = result[i];
    const { city, regionCode } = location;
    const countryCode = location.countryCode.toLowerCase();
    console.log(countryCode);
    if (countryCodes.includes(countryCode)) {
      results.push(`${city}, ${regionCode}`);
      amountFetched += 1;
    }
    i++;
  }
  console.log(results);
  return results;
};

export { fetchLocationOptions };
