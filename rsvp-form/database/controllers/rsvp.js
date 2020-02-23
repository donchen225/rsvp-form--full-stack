const connection =  require('../index.js');
const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
  const {first, last} = data;
  const filters = {first: first, last: last}; // how to pass filters so can check if filters do not already  exist, insert data. otherwise, if already exist, update it.
  Rsvp.findOneAndUpdate(data, {new: true, upsert: true}, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};
// request is successful but why is no data still in my db?
module.exports = findRsvpAndUpdate;
