var readlineSync = require("readline-sync");//it requires the correct name in string
var score =0;
var name = readlineSync.question("enter your name : ");
console.log("\nwelcome "+name+"!");
console.log("\nAs my friend how much do you know about me..? Answer the following questions.. let's see :) \n");
console.log("RULES:\nENTER ALL ANSWERS IN LOWER CASE\nANSWER IN SINGLE WORD\n");
var questions = [questionOne={
                 question:"what is my name? ",
  answer:"manasa"}, 
                 questionTwo={
                   question:"what is my fav colour? ",
                   answer:"blue"
                 },
                questionThree={
                  question:"what is our hostel room number? ",
                  answer:"215b"
                },
                questionFour={
                    question:"my current college name? ",
                    answer:"geethanjali"
                },
                questionFive={
                  question:"what is my fav food? ",
                  answer:"chocolates"
                }];
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  console.log(test(currentQuestion.question,currentQuestion.answer));
}
console.log("score = "+score);
function test(question,answer){
  var userAnswer= readlineSync.question(question);
  if(userAnswer===answer){
    console.log("correct answer :D");
    score++;
  }
  else{
    console.log("incorrect answer :(");
   // score--;
  }
  console.log("-----------");
}