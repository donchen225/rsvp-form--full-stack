const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
  const {first, last} = data;
  Rsvp.findOneAndUpdate({first: first, last: last}, {upsert: true}, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};
module.exports = findRsvpAndUpdate;
