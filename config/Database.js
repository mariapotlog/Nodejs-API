const mongoose = require("mongoose");
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
