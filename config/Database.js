const mongoose = require("mongoose");
const db = process.env.DATABASE;
require("dotenv").config();
module.exports = {
    async Connect() {
        try{
            //we connect to the mongodb local server, it runs on port 27017
            await mongoose.connect(
                "mongodb://localhost:27017/QuizApp" , {
                    useNewUrlParser:true,
                    useUnifiedTopology:true,
                    useCreateIndex:true,
                    useFindAndModify:true
                }, 
                console.log("We are connected to the db")
            );
        }catch(err){
            console.log(err.message);
        }
    }
}
