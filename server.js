const express = require('express');
const app = express();

let pollResults = {
  yes: 0,
  no: 0
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/poll_vote', (req, res) => {
  const vote = req.query.vote;

  if (vote === '0') {
    pollResults.yes++;
  } else if (vote === '1') {
    pollResults.no++;
  } else {
    return res.status(400).send('Invalid vote.');
  }

  res.send('Vote recorded.');
});

app.get('/poll_result', (req, res) => {
  res.json(pollResults);
});

app.listen(8080, () => {
  console.log('Server is connected.');
});