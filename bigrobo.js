class Bigplayer{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.shapeColor = "yellow";
        this.body.velocityX = 3;
        this.body.lifetime=800;
        this.health = 200;
        
        
    }
    
}