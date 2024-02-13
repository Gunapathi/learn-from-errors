const mongoose = require('mongoose');
const User = require('./models/userModel');

mongoose.connect('mongodb://localhost:27017/mongooseBasic')
    .then(() => console.log('DB connection established'))
    .catch((err) => console.error('Error connecting to Mongo'));

const user = new User({
    name: "Guna",
    age: 28
});

// user.save().then((res, req) => {
//     console.log('user saved successfully')
// })

async function run() {
    const newUser = await user.save();
    console.log(newUser);
}

run();
