const express = require("express");
const app = express();
const morgan = require("morgan");

require("dotenv").config(); //loads environment variables from a .env file into process.env
app.use(morgan('combined'))

const PORT = process.env.PORT || 4001;

app.get("/", (req, res, next) => {
  res.send(["Millllyy welcome"]).status(200);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
