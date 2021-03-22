var canvas;
var gameState=0 , contestantCount, database, quiz, question, contestant;
var allContestants =[];
function setup(){
  canvas = createCanvas(900,500);
database=firebase.database()
  
quiz = new Quiz ();
  quiz.getState();
  quiz.start();
  //question = new Question();

}


function draw(){
  background("pink");
  textSize(25);
  fill(0);
text("Question:- Which one would have come first?",70,140);
textSize(20);
text("Option 1: EGG",100,200);
text("Option 2: HEN",100,250);
text("Option 3: NON OF THESE",100,300);
text("Option 4: TYPE YOUR OWN ANS (Don't write 4 type your own answer)",100,350);

if (contestantCount === 4){
  gameState = 1;
}
if (gameState === 1){
  quiz.play();
}
  
}

