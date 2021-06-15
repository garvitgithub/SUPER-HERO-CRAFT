var canvas=new fabric.Canvas("myCanvas");
playerx=10;playery=10;
blockimagewidth=30;blockimageheight=30;
var playerobject="";
var blockimage="";

function playerupdate()
{
fabric.Image.fromURL("player.png",function(Img)
{
playerobject=Img;
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({
top:playery,left:playerx
});
canvas.add(playerobject);
}
);
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
blockimage=Img;
blockimage.scaleToWidth(blockimagewidth);
blockimage.scaleToHeight(blockimageheight);
blockimage.set({
top:playery,left:playerx
});
canvas.add(blockimage);
}
);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if(e.shiftKey==true && keypressed=='80')
{
console.log("garvit pressed shift and p together");
blockimagewidth=blockimagewidth+10;
blockimageheight=blockimageheight+10;
document.getElementById("current_width").innerHTML=blockimagewidth;
document.getElementById("current_height").innerHTML=blockimageheight;
}
if(e.shiftKey==true && keypressed=='77')
{
console.log("garvit presed shift and m together");
blockimagewidth=blockimagewidth-10;
blockimageheight=blockimageheight-10;
document.getElementById("current_width").innerHTML=blockimagewidth;
document.getElementById("current_height").innerHTML=blockimageheight;
}
if(keypressed=='38')
{
up();
console.log("up");
}
if(keypressed=='40')
{
down();
console.log("down");
}
if(keypressed=='37')
{
left();
console.log("left");
}
if(keypressed=='39')
{
right();
console.log("right");
}
if(keypressed=='87')
{
new_image('hulk_face.png');
console.log("q");
}
if(keypressed=='71')
{
new_image('hulk_left_hand.png');
console.log("w");
}
if(keypressed=='76')
{
new_image('hulk_legs.png');
console.log("e");
}
if(keypressed=='84')
{
new_image('hulk_right_hand.png');
console.log("r");
}
if(keypressed=='82')
{
new_image('hulkd_body.png');
console.log("t");
}
if(keypressed=='89')
{
new_image('ironman_body.png');
console.log("y");
}
if(keypressed=='68')
{
new_image('ironman_face.png');
console.log("u");
}
if(keypressed=='85')
{
new_image('ironman_left_hand.png');
console.log("i");
}
if(keypressed=='67')
{
new_image('ironman_legs.png');
console.log("o");
}
if(keypressed=='67')
{
new_image('ironman_right_hand.png');
console.log("p");
}if(keypressed=='67')
{
new_image('spiderman_body.png');
console.log("a");
}if(keypressed=='67')
{
new_image('spiderman_face.png');
console.log("s");
}if(keypressed=='67')
{
new_image('spiderman_left_hand.png');
console.log("d");
}if(keypressed=='67')
{
new_image('spiderman_legs.png');
console.log("f");
}if(keypressed=='67')
{
new_image('spiderman_right_hand.png');
console.log("g");
}if(keypressed=='67')
{
new_image('thor_face.png');
console.log("h");
}if(keypressed=='67')
{
new_image('thor_left_hand.png');
console.log("j");
}if(keypressed=='67')
{
new_image('thor_right_hand.png');
console.log("k");
}if(keypressed=='67')
(keypressed=='67')
}

function up()
{
if(playery>=0)
{
playery=playery-blockimageheight;
console.log("blockimageheight= "+blockimageheight);
console.log("garvit pressed up key,x= "+playerx+" y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}
function down()
{
if(playery<=450)
{
playery=playery+blockimageheight;
console.log("blockimgeheight= "+blockimageheight);
console.log("garvit pressed down key,x= "+playerx+"y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}
function left()
{
if(playerx>=0)
{
playerx=playerx-blockimagewidth;
console.log("blockimagewidth= "+blockimagewidth);
console.log("garvit pressed left key,x= "+playerx+"y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}
function right()
{
if(playerx<=850)
{
playerx=playerx+blockimagewidth;
console.log("blockimagewidth= "+blockimagewidth);
console.log("garvit pressed right key,x= "+playerx+"y= "+playery);
canvas.remove(playerobject);
playerupdate();
}
}