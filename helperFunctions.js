function HelperFunctions() {

	// Event handler for the clear button
	select("#clearButton").mouseClicked(function() {
		// Set the background to white to "clear" the canvas
		background("white");

		// Update pixel array to reflect the cleared canvas
		loadPixels();
	});

	// Event handler for the save image button
	select("#saveImageButton").mouseClicked(function() {
		// Save the current canvas as a PNG image
		saveCanvas("myDrawing", "png");
	});
}
