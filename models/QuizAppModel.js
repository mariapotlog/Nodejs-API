const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuizQuestionSchema = new Schema({
    question:{
        type:String
    },
    category:{
        type:String,
    },
    answer1:{
        type:String
    },
    answer2:{
        type:String
    },
    answer3:{
        type:String
    },
    isCorrect:{
        type:String
    }
})
//we create this QuizQuestion constant in order to access it inside our app
module.exports = mongoose.model("QuizQuestion", QuizQuestionSchema)