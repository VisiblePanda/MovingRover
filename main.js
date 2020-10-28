rover_x=10;
rover_y=10;
rover_height=100;
rover_width=100;
rover_image="rover.png";
background_image="mars.jpg";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var Images=["mars.jpg","Mars2.jpg","Mars3.jpg","Mars4.jpg","Mars5.jpg"];
random_number = Math.floor(Math.random()*5);
console.log(random_number);
background_image= Images[random_number];




function add(){
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
    if(keyPressed == '38')
    {

        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {

        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {

        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {

        right();
        console.log("right");
    }
}
function up()
{
     if (rover_y>=0){
    rover_y= rover_y-10;
     uploadBackground();
     uploadrover();
     }
}
function down()
{
    if (rover_y<=500){ 
    rover_y= rover_y+10;
     uploadBackground();
     uploadrover();
    }
}
function right()
{
    if (rover_x<=700){ 
    rover_x= rover_x+10;
     uploadBackground();
     uploadrover();
    }
}
function left()
{
    if (rover_x>=0){ 
    rover_x= rover_x-10;
     uploadBackground();
     uploadrover();
    }
}