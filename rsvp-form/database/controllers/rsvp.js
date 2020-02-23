const connection =  require('../index.js');
const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
  Rsvp.findOneAndUpdate({email: data.email}, data, {upsert: true}, (err) => {
    if (err) {
      callback(err);
    } else {
      console.log(data);
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

// post request is "successful" but why is no data still in my db?
module.exports = findRsvpAndUpdate;
