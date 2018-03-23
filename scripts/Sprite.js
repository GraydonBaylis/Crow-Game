var Sprite = function(filename) {
	this.image = null;
	this.angle = 0;
	this.TO_RADIANS = Math.PI/180;

	if (filename == undefined || filename == "" || filename == null) {
		console.log('Unable to load Sprite');
		return;
	}

	this.image = new Image();
	this.image.src = filename;

	this.draw = function(x, y, w, h) {
		if (!w || !h) {
			Context.context.drawImage(this.image, x, y);
		} else { 
			//Streched
			Context.context.drawImage(this.image, x, y, w, h);
		}
	}

	this.rotate = function(x,y, angle) {
		Context.context.save();
		Context.context.translate(x, y);
		Context.context.rotate(angle);
		Context.context.drawImage(this.image, 
								-(this.image.width/2),
								-(this.image.height));
		Context.context.restore();
	}

	this.rotateCenter = function(x,y, angle) {
		Context.context.save();
		Context.context.translate(x, y);
		Context.context.rotate(angle * this.TO_RADIANS);
		Context.context.drawImage(this.image, 
								-(this.image.width/2),
								-(this.image.height/2));
		Context.context.restore();
	}
};