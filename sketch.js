var database;
var car1,car2,car3,car4,cars;
var gameState = 0;
var playerCount ;
var from , game , player;
var allPlayer
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database()
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background("white");
    if(playerCount === 4)
    {
        game.update(1);
    }
    if(gameState === 1)
    {
    clear();
    game.play();

    }
}


