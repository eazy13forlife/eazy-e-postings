import axios from "axios";

import countryCodes from "../../countryCodes.js";

//fetches location results based on user's location search value
const fetchLocationOptions = async (locationValue) => {
  try {
    const response = await axios.get(
      `https://api.radar.io/v1/search/autocomplete?query=${locationValue}`,
      {
        headers: {
          Authorization: "prj_live_pk_c606085564ac468adcdf2b79fd450b5a5ecc82d4",
        },
      }
    );

    return createLocationOptions(response.data.addresses);
  } catch {
    return [];
  }
};

//creates our array of location options that we want user to choose from
const createLocationOptions = (allLocations) => {
  // we only want 5 items at a time in our result array
  let result = [];

  //i will iterate our allLocations array
  let i = 0;

  //keeps track of the actual items we have collected
  let amountFetched = 0;

  //while amountFetched is less than 5 and we still have locations in our array to iterate
  while (amountFetched < 5 && i < allLocations.length) {
    const location = allLocations[i];

    const { city = "", state = "", country = "" } = location;

    const countryCode = location.countryCode.toLowerCase();

    if (countryCodes.includes(countryCode)) {
      result.push(`${city}, ${state}, ${country}`);
      amountFetched += 1;
    }

    i++;
  }

  return result;
};

export { fetchLocationOptions };
