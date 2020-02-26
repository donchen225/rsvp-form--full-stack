const express = require('express');
const bodyParser = require('body-parser');
const {findRsvpAndUpdate} = require('../database/controllers/rsvp.js');
const {findAllRsvps} = require('../database/controllers/rsvp.js');

const app = express();
const PORT = 3010;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/rsvps', (req, res) => {
  findAllRsvps((err, result) => {
    if (err) {
      console.log('error');
      res.send(500);
    } else {
      console.log('successfully get all');
      res.status(200).send(result);
    }
  })
})

app.post('/rsvps', (req, res) => {
  findRsvpAndUpdate(req.body, (err, result) => {
    if (err) {
      console.log('error');
      res.send(500);
    } else {
      console.log('successfully updated');
      res.status(200).send(result);
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
