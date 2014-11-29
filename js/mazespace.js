"use strict";

function MazeSpace(directions) {

	var i;
	for (i=0; i < directions.length; i += 1) {
		this[directions[i]];
	}
	this.north = false;
	this.south = false;
	this.east = false;
	this.west = false;
}

MazeSpace.prototype.setWall = function (direction) {
	this[direction] = true;
}