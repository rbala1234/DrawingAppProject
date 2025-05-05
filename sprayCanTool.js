/**
 * SprayCanTool - A fun tool that sprays dots like a spray paint can.
 * Sprays random points within a defined area around the mouse pointer.
 */
function SprayCanTool() {
  this.name = "sprayCanTool";
  this.icon = "assets/sprayCan.jpg";

  // Number of dots sprayed per frame
  this.points = 13;

  // How far the spray spreads from the mouse
  this.spread = 10;

  this.draw = function () {
    // Only draw when the mouse is pressed
    if (mouseIsPressed) {
      for (var i = 0; i < this.points; i++) {
        // Randomly place points within the spread radius
        point(
          random(mouseX - this.spread, mouseX + this.spread),
          random(mouseY - this.spread, mouseY + this.spread)
        );
      }
    }
  };
}
