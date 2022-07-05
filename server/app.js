const express = require("express");
const path = require("path");

//create express application
const app = express();

const port = process.env.PORT || 5000;

//configure express to use our static path,which is the production build path
const productionBuildPath = path.join(__dirname, "./build");
app.use(express.static(productionBuildPath));

//wildcard for anything that can't be found in the production build path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(port, () => {
  `Eazy-E Postings is running on port ${port}`;
});
