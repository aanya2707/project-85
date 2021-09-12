canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

//Give specific height and width to the car image
car_width= 55;
car_hieght= 80;

background_image = "ADVC85VPtemplate-main.jpg";
greencar_image = "ADVC85VPtemplate-main_car2.png";

//Set initial position for a car image.
car_x= 5;
car_y= 225;

function add() {
	//upload car, and background images on the canvas.
	background_img= new Image();
	background_image.onload= uploadBackground;
	background_img.src = background_image;

	car_img= new Image();
	car_img.onload = uploadgreencar;
	car_img.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_img, 0, 0, canvas.width , canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(car_img, car_x, car_y, car_width, car_hieght);	
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
	//Define function to move the car upward
	if(car_y >= 0){
		car_y= car_y - 10 ;
		console.log("When up arrow key is pressed, x = " + car_x + " y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(car_y <= 200){
		car_y= car_y + 10 ;
		console.log("When up down key is pressed, x = " + car_x + " y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(car_x >= 0){
		car_x= car_x - 10 ;
		console.log("When up left key is pressed, x = " + car_x + " y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(car_x <= 400){
		car_x= car_x + 10 ;
		console.log("When up right key is pressed, x = " + car_x + " y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}
