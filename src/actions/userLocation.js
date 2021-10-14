import types from "./types.js";
import axios from "axios";

const fetchUserLocation = () => {
  return async (dispatch) => {
    try {
      const ipifyResponse = await axios.get(
        "https://api.ipify.org?format=json"
      );
      const ipAddress = ipifyResponse.data.ip;
      const ipapiResponse = await axios.get(
        `http://ip-api.com/json/${ipAddress}`
      );
      const { city, regionName } = ipapiResponse.data;
      dispatch({
        type: types.FETCH_USER_LOCATION,
        payload: `${city}, ${regionName}`,
      });
    } catch {
      dispatch({
        type: types.FETCH_USER_LOCATION,
        payload: "Los Angeles, California",
      });
    }
  };
};

export { fetchUserLocation };
