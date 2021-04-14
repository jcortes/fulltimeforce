const express = require("express");
const { json } = require("body-parser");
const { getCommits } = require("../github");

const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express();

app.use(json());
app.get("/commits", getCommits);

app.listen(HTTP_PORT, function () {
  console.log(`Listening on port ${HTTP_PORT}`);
});