import router from './routes';

const express = require('express');

const app = express();

require('dotenv').config(); // loads environment variables from a .env file into process.env
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser'); // parses your request and converts it into a format from which you can easily extract relevant information that you may need.

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4001;

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
