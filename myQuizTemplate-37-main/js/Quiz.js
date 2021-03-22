class Quiz {
    constructor(){

    }
    display(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }
    update(){
        database.ref('/').update({
            gameState: state
          });
    }
    async start(){
        if (gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
        }
        question = new Question();
        question.display();
    }
    play(){
        question.hide();
        background("yellow");
        textSize(20);
        text("RESULTS-",450,150);
        text("CORRECT ANSWER:- 'the one which is ordered first'",400,200);
        Contestant.getContestantInfo();
        if(allContestants !==undefined){
            var displayPosition = 180;
            for(var plr in allContestants ) {
              
       displayPosition+=30;
       if (allContestants[plr].answer==="the one which is ordered first"){
          fill("green");
       } else{
           fill("red");
       }
       textSize(20);
       text(allContestants[plr].name+" : "+ allContestants[plr].answer, 120,displayPosition);
            } 
          
          }
      
      }
}