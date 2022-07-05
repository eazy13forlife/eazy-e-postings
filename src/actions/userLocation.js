import types from "./types.js";
import axios from "axios";

import countryCodes from "../countryCodes.js";
import { updateCountryCode, updateSearchParam } from "./searchParams.js";

//gets where the user is located right when app loads, so we can make a request
//with this initial information.
const fetchUserLocation = () => {
  return async (dispatch) => {
    try {
      //gets user's ip address
      const ipifyResponse = await axios.get(
        "https://api.ipify.org?format=json"
      );

      const ipAddress = ipifyResponse.data.ip;

      //gets info related to user's ip address
      const ipapiResponse = await axios.get(
        `https://ip-api.com/json/${ipAddress}`
      );

      const { city, regionName } = ipapiResponse.data;
      const countryCode = ipapiResponse.data.countryCode.toLowerCase();

      //if user's countryCode isn't among the ones we can access data from,
      //set their location to Los Angeles,CA and update that in the search param
      //so we can make our request with that info
      if (!countryCodes.includes(countryCode)) {
        dispatch({
          type: types.FETCH_USER_LOCATION,
          payload: `Los Angeles, California`,
        });
        dispatch(updateSearchParam("where", `Los Angeles, California`));
        return;
      }

      //if country code is among the ones we have access to, update our country
      //code param, update user's location, and the search param of where they are
      dispatch(updateCountryCode(countryCode));
      dispatch({
        type: types.FETCH_USER_LOCATION,
        payload: `${city}, ${regionName}`,
      });
      dispatch(updateSearchParam("where", `${city}, ${regionName}`));
    } catch {
      //if error in retrieving user's location, use los angeles for user's location and update that in the search param so we can make request.
      // Default country code is "us", so we don't need to update that
      dispatch({
        type: types.FETCH_USER_LOCATION,
        payload: "Los Angeles, California",
      });
      dispatch(updateSearchParam("where", `Los Angeles, California`));
    }
  };
};

export { fetchUserLocation };
