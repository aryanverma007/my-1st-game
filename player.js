class Player{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.shapeColor = "yellow";
        this.body.velocityX = 4;
        this.body.lifetime=800;
        this.health = 100;
        this.body.addImage("player",robotImg);
        this.body.scale = 0.09;
    }
    
}