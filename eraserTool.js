function eraserTool() {
	this.name = "eraserTool";
	this.icon = "assets/Eraser.jpg"; // Make sure to provide an appropriate icon

	// default eraser size
	this.eraserSize = 20;

	// track the previous position for smooth erasing
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function() {
		if (mouseIsPressed) {
			stroke(255); // white color for erasing
			strokeWeight(this.eraserSize);
			line(previousMouseX, previousMouseY, mouseX, mouseY);

			previousMouseX = mouseX;
			previousMouseY = mouseY;
		} else {
			// reset previous position when not drawing
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	// Clears any custom UI options
	this.unselectTool = function() {
		select(".options").html("");
	};

	// Adds a slider to adjust eraser size
	this.populateOptions = function() {
		select(".options").html(
			"Eraser size: <input type='range' id='eraserSizeSlider' min='5' max='100' value='20'>"
		);
		select("#eraserSizeSlider").input(() => {
			this.eraserSize = select("#eraserSizeSlider").value();
		});
	};
}