function blurTool() {
	this.name = "blurTool";
	this.icon = "assets/blur.jpg"; // Make sure you provide this icon

	// size of the blur area (can be adjusted)
	this.blurSize = 20;

	this.draw = function() {
		// If mouse is pressed, apply blur effect
		if (mouseIsPressed) {
			loadPixels();
			for (let x = -this.blurSize / 2; x < this.blurSize / 2; x++) {
				for (let y = -this.blurSize / 2; y < this.blurSize / 2; y++) {
					let px = constrain(mouseX + x, 0, width - 1);
					let py = constrain(mouseY + y, 0, height - 1);
					this.applyBlur(px, py);
				}
			}
			updatePixels();
		}
	};

	// Applies a basic blur by averaging neighboring pixels
	this.applyBlur = function(x, y) {
		let r = 0, g = 0, b = 0, count = 0;
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				let px = constrain(x + i, 0, width - 1);
				let py = constrain(y + j, 0, height - 1);
				let idx = 4 * (px + py * width);
				r += pixels[idx];
				g += pixels[idx + 1];
				b += pixels[idx + 2];
				count++;
			}
		}
		r = r / count;
		g = g / count;
		b = b / count;

		let index = 4 * (x + y * width);
		pixels[index] = r;
		pixels[index + 1] = g;
		pixels[index + 2] = b;
	};

	// Clears any custom UI options
	this.unselectTool = function() {
		select(".options").html("");
	};

	// Add UI to adjust blur size
	this.populateOptions = function() {
		select(".options").html(
			"Blur size: <input type='range' id='blurSizeSlider' min='5' max='50' value='20'>"
		);
		select("#blurSizeSlider").input(() => {
			this.blurSize = select("#blurSizeSlider").value();
		});
	};
}
