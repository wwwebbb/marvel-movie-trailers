const PORT = 8002;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.get('/', (req, res) => {
  res.json('hi');
});

app.listen(8002, () => console.log(`Server is running on port ${PORT}`));
