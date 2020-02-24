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

// const findRsvpAndUpdate = async (data, callback) => {
//   try {
//     const search = await Rsvp.find({email: data.email})
//     if (search.length === 0) {
//       const newRsvp = new Rsvp(data);
//       newRsvp.save();
//       console.log(`new rsvp created ${data.email}`);
//     } else {
//       const upsert = await Rsvp.findOneAndUpdate({email: data.email}, data, {upsert: true});
//       console.log(`rsvp updated ${data.email}`);
//     }
//   } catch(err) {
//     console.log(err);
//   }
// }

// post request is "successful" but why is no data still in my db?
module.exports = findRsvpAndUpdate;
