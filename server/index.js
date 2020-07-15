const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");
const { request } = require("express");

app.use(cors());
app.use(express.json());

app.listen(4400, () => {
  console.log("server has started on port 4400")
});