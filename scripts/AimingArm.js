var AimingArm = function(filename) {
	Sprite.call(this, filename);

	this.calcRotationToMouse = function(x, y, mouseX, mouseY) {
		var opp = (y - mouseY);
		var adj = (mouseX - x);
		var result = -Math.atan(opp/adj);

		if (adj>0) {
			result += Math.PI/2;
		} else {
			result -= Math.PI/2;
		}
		return result;
	}
}

AimingArm.prototype = Object.create(Sprite.prototype);
AimingArm.prototype.constructor = Sprite;