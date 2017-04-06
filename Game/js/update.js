// Move sprite sheet through walk animation
function walkAnim() {
    if (player.counter <= r ) { 
        player.sx = 0; 
    }
    if (player.counter > r && player.counter <= (r*2) ) { 
        player.sx = 112; 
    }
    if (player.counter > (r*2) && player.counter <= (r*3) ) { 
        player.sx = 224; 
    }
    if (player.counter > (r*3) && player.counter <= (r*4) ) { 
        player.sx = 336; 
    }
    if (player.counter > (r*4) ) { 
        player.counter = 0; 
    }  
    player.counter += 1;
}


// Update game objects
var update = function (modifier) {
    if (isPaused !== true) {                    // GAME UNPAUSED  
        var playerMid = player.x + player.w/2;
        // Check proximity to monsters, set prompt flag & hilight object
        if (playerMid <= (monster1.x + monsterImage1.width) && playerMid >= monster1.x) {
            prompt = true;
            monsterImage1.src = 'images/monster-prompt.png';
        }
        else if (playerMid <= (monster2.x + monsterImage2.width) && playerMid >= monster2.x) { 
            prompt = true;
            monsterImage2.src = 'images/monster-prompt.png';
        }
        else if (playerMid <= (monster3.x + monsterImage3.width) && playerMid >= monster3.x) {
            prompt = true;
            monsterImage3.src = 'images/monster-prompt.png';
        }
        else if (playerMid <= (monster4.x + monsterImage4.width) && playerMid >= monster4.x) {
            prompt = true;
            monsterImage4.src = 'images/monster-prompt.png';
        }
        else if (playerMid <= (monster5.x + monsterImage5.width) && playerMid >= monster5.x) {
            prompt = true;
            monsterImage5.src = 'images/monster-prompt.png';
        }
        else {
            prompt = false;
            monsterImage1.src = 'images/monster.png';
            monsterImage2.src = 'images/monster2.png';
            monsterImage4.src = 'images/monster3.png';
            monsterImage3.src = 'images/monster4.png';
            monsterImage5.src = 'images/monster5.png';
        }
        
        // Player movement
        if (37 in keysDown) {                   // left
            character.src = 'images/hero-sprites-L.png';
            player.x -= player.speed * modifier;
            lastDir = 'left';
            walkAnim();
        } 
        else if (39 in keysDown) {              // right
            character.src = 'images/hero-sprites.png';
            player.x += player.speed * modifier;
            lastDir = 'right';
            walkAnim();
        }
        else {                                  // no input (stopped)
            if (lastDir == 'left') {
                character.src = 'images/hero-L.png';
                player.counter = 0;
                player.sx = 0;
            }
            if (lastDir == 'right') {
                character.src = 'images/hero.png';
                player.counter = 0;
                player.sx = 0;
            }
        }

        // Canvas bounds: right, left
        if (player.x >= canvas.width - player.w) { player.x = canvas.width - player.w; }
        if (player.x <= 0) { player.x = 0; }
        
        // On activation, check proximity to monsters, set prox# flags
        if (38 in keysDown) {                   // up
            var playerMid = player.x + player.w/2;
            if (playerMid <= (monster1.x + monsterImage1.width) && playerMid >= monster1.x) {
                if (player.inventory < 5 && collected1 == false) { player.inventory += 1; collected1 = true; }
                prox1 = true;
            }
            else if (playerMid <= (monster2.x + monsterImage2.width) && playerMid >= monster2.x) {
                if (player.inventory < 5 && collected2 == false) { player.inventory += 1; collected2 = true; }
                prox2 = true;
            }
            else if (playerMid <= (monster3.x + monsterImage3.width) && playerMid >= monster3.x) {
                if (player.inventory < 5 && collected3 == false) { player.inventory += 1; collected3 = true; }
                prox3 = true; 
            }
            else if (playerMid <= (monster4.x + monsterImage4.width) && playerMid >= monster4.x) {
                if (player.inventory < 5 && collected4 == false) { player.inventory += 1; collected4 = true; }
                prox4 = true;
            }
            else if (playerMid <= (monster5.x + monsterImage5.width) && playerMid >= monster5.x) {
                if (player.inventory < 5 && collected5 == false) { player.inventory += 1; collected5 = true; }
                prox5 = true;
            }
        }
        
        // Pause if any prox# flags
        if (prox1 || prox2 || prox3 || prox4 || prox5 == true) { isPaused = true; }
    }
    else if (isPaused == true) {                // GAME PAUSED
        // Unpause when down pressed
        if (40 in keysDown) {                   // down
            prox1 = false;
            prox2 = false;
            prox3 = false;
            prox4 = false;
            prox5 = false;
            isPaused = false;
        }
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
    }
    
    
    //clean this up - make global variable
    var div = document.getElementById("modal");
    div.style.display = "none";
    
    
    
    if (end == true) {
        div.style.display = "block";
    }
    
    
    
    
    
    
};