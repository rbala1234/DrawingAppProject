function ScissorsTool() {
    this.name = "scissorsTool";
    this.icon = "assets/scissors.jpg"; // add image to assets folder!

    let startX = -1, startY = -1;
    let cutting = false;

    this.draw = function() {
        if (mouseIsPressed) {
            if (startX == -1) {
                startX = mouseX;
                startY = mouseY;
                loadPixels();
                cutting = true;
            } else {
                updatePixels();
                noFill();
                stroke("red");
                rect(startX, startY, mouseX - startX, mouseY - startY);
            }
        } else if (cutting) {
            // clear the selected area
            noStroke();
            fill(255);
            rect(startX, startY, mouseX - startX, mouseY - startY);
            cutting = false;
            startX = -1;
            startY = -1;
        }
    };
}
