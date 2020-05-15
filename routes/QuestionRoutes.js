const express = require("express");
const router = express.Router();
const QuizQuestion = require("../models/QuizAppModel")
const { getQuestions} = require("../controllers/QuestionsController")

//routes
//get all questions from database   
//we tell our app when it receives a request on "/" to execute some code                                                                                                    
router.get("/", getQuestions );

//get one question from db
//we tell our app when it receives a request on "/:id"(:id meaning anything) to execute some code
router.get("/:id", async(req,res)=>{
    //we destructure the req.params in order to get the id
    const {id} = req.params;
    //here we put inside a constant the result of the findById() operation, 
    //which uses the request made by the user in order to find a specified question
    const question_ = await QuizQuestion.findById(id);
    //same opperation as the req.params one
    const {question, category, answers} = question_;
    console.log("question: " + question);
    console.log("category: " + category);
    console.log("answers: " + answers);
    res.json(question_);
});
//get all questions with a specified category
router.get("/categories/:category", async (req,res) =>{
    //we add into a constant the result of the find() operation with the key-value-pair of category and the specified category
    //"category" -> key
    //req.params.id -> value
    //"category": req.params.category -> key-value-pair
    const category = await QuizQuestion.find({"category": req.params.category});
    res.json(category);
});
//post one quesiton into db
router.post("/post",async(req,res)=>{
    //we add to constants all the information from the body we receive from the request
    const question = req.body.question;
    const category = req.body.category;
    const answers = [{
        answer1: req.body.answer1,
        isCorrect:req.body.isCorrect1
    },{
        answer2: req.body.answer2,
        isCorrect:req.body.isCorrect2
    },{
        answer3: req.body.answer3,
        isCorrect:req.body.isCorrect3
    }]
    //we add all the information into a new object
    const newQuestion = {
        question,
        category,
        answers
    }
    console.log(newQuestion);
    //then we create a new QuizQuestion by passing in the .create method the object we created earlier
    const AddedQuestion = await QuizQuestion.create(newQuestion);
    res.redirect("/")
});

//edit one question from db based on objectid(req.params.id)
router.put("/:id/put", async (req,res)=>{
     //we add to constants all the information from the body we receive from the request
    const question = req.body.question;
    const category = req.body.category;
    const answers = [{
        answer1: req.body.answer1,
        isCorrect:req.body.isCorrect1
    },{
        answer2: req.body.answer2,
        isCorrect:req.body.isCorrect2
    },{
        answer3: req.body.answer3,
        isCorrect:req.body.isCorrect3
    }]
    const updatedQuestion = {
        question,
        category,
        answers
    }
    console.log(updatedQuestion);
    //then we update the QuizQuestion by passing the req.params.id and the updatedQuestion object
    //in the.findByIdAndUpdate, basically we are telling what document from the db to update
    const putQuestion = await QuizQuestion.findByIdAndUpdate(req.params.id, updatedQuestion);
    res.redirect(`/${req.params.id}`);
})

//delete one questions from db based on objectid(req.params.id)
router.delete("/:id/delete", async(req,res)=>{
    await QuizQuestion.findByIdAndDelete(req.params.id);
    res.redirect("/")
})

module.exports = router;