import axios from "axios";

import countryCodes from "../../countryCodes.js";

//fetches location results based on user's location search value
const fetchLocationOptions = async (locationValue) => {
  try {
    const response = await axios.get(
      `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${locationValue}`
    );

    return createLocationOptions(response.data.data);
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

    const { city, regionCode } = location;

    const countryCode = location.countryCode.toLowerCase();

    if (countryCodes.includes(countryCode)) {
      result.push(`${city}, ${regionCode}`);
      amountFetched += 1;
    }

    i++;
  }

  return result;
};

export { fetchLocationOptions };
