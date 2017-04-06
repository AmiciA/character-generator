// Draw everything
var render = function () {
	// Draw background & characters when ready
    if (bgReady) { ctx.drawImage(bg, 0, 0); };
    if (characterReady) { ctx.drawImage(character, player.sx, 0, player.w, player.h, player.x, player.y, player.w, player.h); };
	if (monsterReady1) { ctx.drawImage(monsterImage1, monster1.x, monster1.y); };
    if (monsterReady2) { ctx.drawImage(monsterImage2, monster2.x, monster2.y); }; 
    if (monsterReady3) { ctx.drawImage(monsterImage3, monster3.x, monster3.y); };
    if (monsterReady4) { ctx.drawImage(monsterImage4, monster4.x, monster4.y); };
    if (monsterReady5) { ctx.drawImage(monsterImage5, monster5.x, monster5.y); };

    // Show prompt over player's head
    if (prompt) {
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.font = "14px Helvetica";
        ctx.fillText("Press up arrow, then down arrow to close", player.x, player.y - 30);
    }
                       
    // Show monster's speech at top
    if (prox1) {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0, 50, canvas.width, canvas.height);
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.font = "24px Helvetica";
        ctx.fillText("I'm red!", (canvas.width/2 + 30), 75);
        ctx.font = "16px Helvetica";
        ctx.fillText(
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            (canvas.width/2 + 30), 115
        );
        ctx.drawImage(monsterImage1, canvas.width/4, canvas.height/2, player.w*3, player.h*3);
    }
    
    else if (prox2) {
        ctx.fillStyle = "rgb(255, 125, 0)";
        ctx.font = "24px Helvetica";
        ctx.fillText("I'm orange!", 32, 64);
    }
    else if (prox3) {
        ctx.fillStyle = "rgb(255, 255, 0)";
        ctx.font = "24px Helvetica";
        ctx.fillText("I'm just yellow.", 32, 64);
    }
    else if (prox4) {
        ctx.fillStyle = "rgb(125, 255, 0)";
        ctx.font = "24px Helvetica";
        ctx.fillText("I'm lime!", 32, 64);
    }
    else if (prox5) {
        ctx.fillStyle = "rgb(0, 255, 125)";
        ctx.font = "24px Helvetica";
        ctx.fillText("Go away...", 32, 64);
    }
    
    // inventory/progress
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.font = "18px Helvetica";
    ctx.fillText("Discovered: " + player.inventory + "/5.", 400, 25);
    if (player.inventory == 5) {
        ctx.fillText("press 'E' to Make your recommendation.", 400, 45);
        if (69 in keysDown) {
            end = true;
            isPaused = true;
        }
        if (82 in keysDown) {
            end = false;
            isPaused = false;
        }
    }
    
    
    //clean this up - make global variable
    var div = document.getElementById("modal");
    div.style.display = "none";
    
    
    
    if (end == true) {
        div.style.display = "block";
    }
};


// Main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    window.requestAnimationFrame(main);
};


// Set timefix & begin game
var then = Date.now();
loadImages();
main();