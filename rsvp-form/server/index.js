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
      console.log('Internal Server Error - Something went wrong');
      res.send(500);
    } else {
      if (result) {
        console.log('A record was found, so it was updated');
        res.sendStatus(200);
      } else {
        console.log('No record was found, so one was created');
        res.sendStatus(201);
      }
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
