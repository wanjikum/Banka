const express = require("express");
require("dotenv").config(); //loads environment variables from a .env file into process.env
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
