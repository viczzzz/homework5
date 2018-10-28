const canvas = document.getElementById('boxes');
const context =canvas.getContext('2d');

canvas.height = 500;
canvas. width = 400;

const rand = function(num) {
 return Math.floor(Math.random() * num) + 1;
    };


const colorArray = ['#C0C0C0','#FF0000','#F08080','#FFA07A','#CD5C5C','#E9967A'];


const createBoxes = function (count,canvasWidth,canvasHeight) {
	const arr = [];
	 for(let i=0; i<= arr.length;i++) {
	 	const boxWidth = 30;
	 	const boxHeight = 30;
	 	arr[arr.length] = {
	 		width: boxWidth,
	 		height: boxHeight,
	 		x: rand(canvasWidth-boxWidth),
	 		y: rand(canvasHeight-boxHeight),
	 		delta: 5,
	 		xD: 1,
	 		yD: 1,
	 		color: colorArray[rand(6)-1],
	 		draw: function() {
	 			context.fillStyle = this.color;
	 			context.fillRect(this.x, this.y , this.width , this.height);
	 		},
	 		update: function(){
	 			this.x += this.xD*this.delta;
	 			this.y += this.yD*this.delta;
	 			if (this.x >= canvas.width-this.width){
	 				this.xD= -1;
	 			}else if(this.x <= 0) {
	 				this.xD=1
	 			}

	 			if (this.y>=canvas.height-this.height){
	 				this.yDir = -1;	
	 			}else if (this.y <= 0){
	 				this.yDir = 1;
	 			}


	 		}
	 	}
	 };
	 return arr;
};

const createdBoxes = createBoxes(100,canvas.width, canvas.height);

const draw = function(boxes) {
	for(let i=0; i < arr.length ; i++){
		boxes[i].draw();
	}
};


const update = function(boxes) {
	for (let i=0; i < arr.length ; i++){
		boxes[i].update();
	}
};

const loop = function () {
	context.clearRect(0,0,canvas.width,canvas.height);
	draw(createdBoxes);
	update(createdBoxes);
	requestAnimationFrame(loop);
};

loop();



