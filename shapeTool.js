function ShapeTool() {
    this.name = "shapeTool";
    this.icon = "assets/shape.jpg"; // add image to assets folder!

    let startX = -1, startY = -1;
    let drawing = false;
    this.shapeType = "rectangle"; // or "ellipse"

    this.draw = function() {
        if (mouseIsPressed) {
            if (startX == -1) {
                startX = mouseX;
                startY = mouseY;
                loadPixels();
                drawing = true;
            } else {
                updatePixels();
                if (this.shapeType === "rectangle") {
                    rect(startX, startY, mouseX - startX, mouseY - startY);
                } else {
                    ellipse((startX + mouseX) / 2, (startY + mouseY) / 2, Math.abs(mouseX - startX), Math.abs(mouseY - startY));
                }
            }
        } else if (drawing) {
            drawing = false;
            startX = -1;
            startY = -1;
        }               
    };

    this.populateOptions = function() {
        select(".options").html("<button id='toggleShape'>Toggle Shape</button>");
        select("#toggleShape").mouseClicked(() => {
            this.shapeType = (this.shapeType === "rectangle") ? "ellipse" : "rectangle";
        });
    };

    this.unselectTool = function() {
        updatePixels();
        select(".options").html("");
    };
}
