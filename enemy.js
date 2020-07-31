class Enemy{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.shapeColor = "red";
        this.body.lifetime=800;
        this.health = 100;
        this.body.addImage("enemy",enemyrobotImg);
        this.body.scale = 0.20;
    }
    
}