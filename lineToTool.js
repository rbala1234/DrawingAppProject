/**
 * LineToTool - A drawing tool that creates straight lines between two points.
 * This tool allows users to click and drag to preview a straight line,
 * and finalizes it when the mouse is released.
 */
class LineToTool {
  constructor() {
    // Icon image and name for display in the toolbox
    this.icon = "assets/lineTo.jpg";
    this.name = "LineTo";

    // Internal variables to store the start position of the line
    var startMouseX = -1;
    var startMouseY = -1;

    // Flag to indicate whether a line is currently being drawn
    var drawing = false;

    /**
     * This function is called repeatedly while this tool is active.
     * It handles tracking the mouse to preview and draw straight lines.
     */
    this.draw = function () {
      // If the mouse is pressed
      if (mouseIsPressed) {
        // Check if this is the start of a new line
        if (startMouseX == -1) {
          // Store the current mouse position as the starting point
          startMouseX = mouseX;
          startMouseY = mouseY;
          drawing = true;

          // Save the current canvas pixel data to allow line previewing
          loadPixels();
        } else {
          // Restore the canvas to its previous state before drawing preview
          updatePixels();

          // Draw a preview line from start point to current mouse location
          line(startMouseX, startMouseY, mouseX, mouseY);
        }
      }
      // If mouse is released and we were drawing
      else if (drawing) {
        // Finalize the line by leaving the previewed version on the canvas
        // (line isn't redrawn here because it's already been shown during dragging)

        // Reset variables for the next line
        drawing = false;
        startMouseX = -1;
        startMouseY = -1;
      }
    };
  }
}
