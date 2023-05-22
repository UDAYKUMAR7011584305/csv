const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://udaykumar9910911052:3Rfbez2SBp6ZMA0C@cluster0.mvcn4xs.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;