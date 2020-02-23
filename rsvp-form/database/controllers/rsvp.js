const connection =  require('../index.js');
const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
  const {first, last} = data;
  const filters = {first: first, last: last}; // how to pass filters so can check if filters do not already  exist, insert data. otherwise, if already exist, update it.
  Rsvp.findOneAndUpdate(data, {upsert: true}, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Rsvp.create({first: 'Donald', last: 'Chen', email: 'dochen225@berkeley.edu', guests: 1}, (err) => {
//   if (err) {
//     console.log('error in inserting first data');
//   } else {
//     console.log('insert is successful');
//   }
// })

// request is successful but why is no data still in my db?
module.exports = findRsvpAndUpdate;
