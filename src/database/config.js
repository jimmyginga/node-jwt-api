/**
 * data base connection file [mongodb]
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/api-nodejs', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
//Exporting module and create a his route
module.exports = mongoose