
class Game
{
    constructor()
    {
      

    }
    getstate()
    {
    var gameStateRef = database.ref('Gamestate')
    gameStateRef.on('value' , (data)=>{
    gameState = data.val();
    })
    }
    update(state)
    {database.ref('/').update({

    Gamestate : state
    })}
     async start()
    {
    if(gameState === 0 )
    {
        player = new Player()
        var playerCountRef = await database.ref("playerCount").once("value")
        if(playerCountRef.exists())
        {
            playerCount = playerCountRef.val();
            player.getCount();

        }
        form = new Form();
        form.display();
    }
    car1 = createSprite(100,200);
    car2= createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1,car2,car3,car4];
    }
    play()
    {
        form.hide();
        textSize(30);
        text('gameStarted' , 120 , 100);    
        Player.getPlayerInfo();
        if(allPlayer !== undefined)
        {
         var index = 0;
         var x = 0;
         var y 
         for(var p in allPlayer)
         {
         index = index + 1;
         x = x+200
         y = displayHeight - allPlayer[p].distance;
         cars[index - 1].x = x
         cars[index - 1].y = y
         //var displayPosition = 130
         //displayPosition += 20
         //text//Size(15);
         //text(allPlayer[p].name + ':' + allPlayer[p].distance , 120 , displayPosition)
         if (index === player.index)
         {
            cars[index - 1].shapeColor = 'red';
            camera.position.x = displayWidth/2;
            camera.position.y =cars[index - 1].y;
         }
        }
        }
        if(keyDown(UP_ARROW)&&player.index !== null)
        {
         player.distance += 50;
         player.update();   
        }
    }
}