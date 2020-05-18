//we require the express library, which basically is our framework
const express = require("express");
//cross-origin-resource-sharing, helps us access restricted resources on a web page
const cors = require("cors");
//mongoose helps us interface with mongodb, gives us a ton of functions to use
const mongoose = require("mongoose");
const {Connect} = require("./config/Database");
//we instanciate express
const app = express();
//we tell our app to check if its in development, and if it is require the dotenv module
//module that helps us to store values in a safe way
if(app.get('env') == "development"){
    require("dotenv").config();
}
Connect();
//we tell our app to use cors
app.use(cors());
//we tell our app to use the express.urlencoded option
app.use(express.urlencoded({extended:false}));
//we tell our app to use json format
app.use(express.json());

const QuestionsRoutes = require("./routes/QuestionRoutes");
app.use("/api", QuestionsRoutes)
const port = process.env.PORT
//we tell the app to listen on a specified port
app.listen(port, ()=>{
    console.log(`Server has started on ${port}`);
})
//we export the app to use it anywhere else in the app
module.exports = app;
