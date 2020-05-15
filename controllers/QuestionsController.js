const QuizQuestion = require("../models/QuizAppModel");

module.exports = {
    async getQuestions(req,res,next) {
        //here he put inside a constant the result of the find() operation
        const questions = await QuizQuestion.find({});
        console.log(questions)
        //when everything is finished we respond with a json of the found questions from the db
        res.json(questions); 
    }
}