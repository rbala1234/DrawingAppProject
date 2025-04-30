function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
	//Sets the name and icon of the tool

	var startMouseX = -1;
	var startMouseY = -1;
	//Declares the initial position of the mouse when drawing starts
	
	var drawing = false;
	//Boolean statement to see if user is drawing

	this.draw = function(){
		//This functions handles drawing

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//Sets the boolean true to indicate user is drawing
				loadPixels();
				//Saves the drawings of the canvas
			}
	
			else{
				updatePixels();
				//Restoring the old drawing of the canvas
				line(startMouseX, startMouseY, mouseX, mouseY);
				//Draws a line from the starting mouse position to current mouse position 
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
			//Resets the starting mouse position
		}
	};


}
