import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobData, updateSearchParam, fetchUserLocation } from "./actions";

const clearbit = require("clearbit")("sk_c5daacea98950094e1bdb4c891d21995");

const App = () => {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(updateSearchParam("what", "pepsi"));
    dispatch(fetchJobData());
    dispatch(fetchUserLocation());
  };

  axios
    .get(
      "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=92a35e33&app_key=8d6de2313330dc88848ec37ea6285db9&results_per_page=20&salary_min=15000&salary_max=99000&part_time=1"
    )
    .then(function (response) {
      const results = response.data.results;
      console.log(results);
      const resultsArray = [];
      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const {
          company: { display_name: companyName },
          created,
          description,
          title,
          location: { display_name: jobLocation },
          salary_max,
          salary_min = "",
          redirect_url,
        } = result;
        console.log(redirect_url);
        clearbit.NameToDomain.find({
          name: companyName,
        })
          .then((result) => {
            console.log(result.logo);
          })
          .catch((error) => {
            console.log("hey");
          });
      }
    });

  return <button onClick={onButtonClick}>he</button>;
};

export default App;
