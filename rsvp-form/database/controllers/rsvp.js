const connection =  require('../index.js');
const Rsvp = require('../models/rsvp.js');

const findAllRsvps = (callback) => {
  Rsvp.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

const findRsvpAndUpdate = (data, callback) => {
  console.log('data', data);
  Rsvp.findOneAndUpdate( {email: data.email}, data, {upsert: true}, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {findRsvpAndUpdate, findAllRsvps};
