var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var snake=[];
var posX=0;
var posY=0;
var yemX=20;
var yemY=20;
var vX=0;
var vY=0;
var score=5;
document.addEventListener("keydown",key);


setInterval(loop,1000/15);
function loop(){
    draw();
    update();
}
function draw(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,800,800);
    ctx.fillStyle="#FF0000";
    ctx.fillRect(yemX*20,yemY*20,20,20);
    ctx.fillStyle="yellow"
    snake.forEach(i=>{
        ctx.fillRect(i.posX*20,i.posY*20,20,20);

    })
    ctx.fillStyle="#A4A4A4";
    ctx.font="30px Arial";
    ctx.fillText(score-5,20,40);
    
}
function update(){
    posX+=vX;
    posY+=vY;
    snake.push({posX:this.posX,posY:this.posY});
    snake.forEach(i=>{if(snake.length>score){snake.shift()}});
    if(posX===yemX&&posY==yemY){
        score++;
        yemX=Math.floor(Math.random()*20);
        yemY=Math.floor(Math.random()*20);
    }
    console.log(this.posY," ",this.posY)
    if(this.posX<0)
    {
        this.posX=40;
    }
    if(this.posX>40)
    {
        this.posX=-1;
    }
    if(this.posY<0)
    {
        this.posY=40;
    }
    if(this.posY>40)
    {
        this.posY=-1;
    }
}
function key(key){
    if(key.keyCode===87&&vY!==1)
    {
        vX=0;
        vY=-1;
    } 
    if(key.keyCode===83&&vY!==-1)
    {
        vX=0;
        vY=1;
    }
    if(key.keyCode===68&&vX!==-1)
    {
        vX=1;
        vY=0;
    }
    if(key.keyCode===65&&vX!==1)
    {
        vX=-1;
        vY=0;
    }
}