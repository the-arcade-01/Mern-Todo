const mongoose = require('mongoose');

const db = "mongodb+srv://koshti:koshti01@nodetuts.wtr2t.mongodb.net/nodeTuts?retryWrites=true&w=majority";

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).catch((error)=>{console.log(error.message)});

const connection = mongoose.connection;

module.exports = connection;