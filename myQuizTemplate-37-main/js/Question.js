class Question {
    constructor(){
        //textSize(50);
        this.title = createElement('h1');
        this.input = createInput('Name');
        this.opt= createInput('Option number')
        this.button = createButton('Submit');

    }
    display(){
        this.title.html("Grandmaster Quiz");
        this.title.position(380,50);
        
        

        this.input.position(200,400);
        this.input.size(150);
        this.opt.position(400,400);
        this.button.position(600,400);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            contestant.name = this.input.value();
            contestant.answer = this.opt.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

            

            
        });
    }
    hide(){
        
        this.input.hide();
        this.opt.hide();
        this.button.hide();
        //text("Thank You for your response, please wait for other participants to answer",100,100);
    }
}