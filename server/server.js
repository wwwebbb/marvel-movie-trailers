const express = require('express');
const cors = require('cors');
const axios = require('axios');
const createError = require('http-errors');
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.json('hi');
});

//route to get videos
app.get('/videos', async (req, res, next) => {
  const maxResults = 50;
  const channelId = 'UCvC4D8onUfXzvjTOM-dBfEA';
  try {
    const request = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&channelId=${channelId}&part=snippet,id&q="Official Trailer"&maxResults=${maxResults}`
    );
    res.json(request.data);
  } catch (err) {
    next(err);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
