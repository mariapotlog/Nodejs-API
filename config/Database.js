const mongoose = require("mongoose");
const db = process.env.DATABASE;
const app = require("../app");

// if(app.get('env') == "development"){
//     require("dotenv").config();
// }
module.exports = {
    async Connect() {
        try{
            //we connect to the mongodb local server, it runs on port 27017
            await mongoose.connect(
                process.env.DATABASE , {
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
