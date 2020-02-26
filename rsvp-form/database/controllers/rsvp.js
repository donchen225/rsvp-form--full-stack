const connection =  require('../index.js');
const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
  console.log('data', data);
  Rsvp.findOneAndUpdate( {email: data.email}, data, {upsert: true}, (err) => {
    if (err) {
      callback(err);
    } else {
      console.log(data);
      callback(null);
    }
  });
};

module.exports = findRsvpAndUpdate;
