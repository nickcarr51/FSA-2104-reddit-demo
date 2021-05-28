const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

const PUBLIC_PATH = path.join(__dirname, './public');
const DIST_PATH = path.join(__dirname, './dist');
const PORT = process.env.PORT || 3000;
const URL = 'https://reddit.com/';

app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
app.use(express.json());


app.get('/api/reddit', async (req, res) => {
  let data;
  if (req.query.subreddit) {
    data = (await axios.get(`${URL}r/${req.query.subreddit}/.json`)).data.data.children;
  } else {
    data = (await axios.get(`${URL}.json`)).data.data.children;
  }
  res.send(data);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});

