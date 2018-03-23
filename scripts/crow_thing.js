const FPS = 60;
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

var currFrame = 0;

var relMouseX = -1;
var relMouseY = -1;

var Context = {
	canvas:null,
	context:null,
	create: function(canvas_tag_id) {
		this.canvas = document.getElementById(canvas_tag_id);
		this.context = this.canvas.getContext('2d');
		return this.context;
	}
};

$(document).ready(function() {
	Context.create('canvas');
	audioLibrary = new AudioLibrary();
	currFrame = 0;

	var angle = 0;
	var arrow = new AimingArm("resources/sprites/arrow.png");
	var scarecrow = new Sprite("resources/sprites/scarecrow_bare.png");

	setInterval(function() {
		currFrame++;

		drawBackground("#273142");

		arrow.rotate(300,300,arrow.calcRotationToMouse(300,300, 
													   relMouseX, 
													   relMouseY));
		scarecrow.draw(10,400);



	}, 1000/FPS);
});

function drawBackground(color) {
	Context.context.fillStyle = color;
	Context.context.fillRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);	
}

$(document).on("mousemove", function(event) {
	var canvasOffset = $("#canvas").offset();
	relMouseX = event.clientX-canvasOffset.left;
	relMouseY = event.clientY-canvasOffset.top;
});