/**
 * Controller file for user
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
const express = require("express")
const app = express()

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allowe-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Content-Type","application/json")
    req.header("Content-Type","application/json")
    next()
})
// setting thoe body for json format[new express json]
app.use(express.json())

// configuring routes and making the app available
// auth routes
require('./controllers/userController')(app)
require('./controllers/painelController')(app)
require('./controllers/postController')(app)
//  non auth routes
require('./controllers/homeController')(app)

//Exporting module and setting route
module.exports = app 