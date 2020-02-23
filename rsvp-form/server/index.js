const express = require('express');
const bodyParser = require('body-parser');
const findRsvpAndUpdate = require('../database/controllers/rsvp.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// does it matter whether request is post or post when using 'upsert'?
app.post('/rsvps', (req, res) => {
  findRsvpAndUpdate(req.body, (err) => {
    if (err) {
      console.log('error');
      res.status(500).end();
    } else {
      console.log('successfully updated')
      res.status(200).end();
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
