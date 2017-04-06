// Global variables
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    player = {
        x: canvas.width/2,          // sprite x pos
        y: canvas.height-224,       // sprite y pos
        w: 112,                     // sprite width
        h: 224,                     // sprite height
        sx: 0,                      // internal x position of sprite sheet
        counter: 0,                 // frame counter
        rate: 15,                   // sprite sheet frame rate
        speed: 200,                 // pixels/sec
        inventory: 0                // count items viewed
    };
    monster1 = { x: 050, y: 400 };
    monster2 = { x: 200, y: 400 };
    monster3 = { x: 250, y: 400 };
    monster4 = { x: 300, y: 400 };
    monster5 = { x: 650, y: 400 };


var r = player.rate;                // short variable
var prompt = false;                 // prompt action when near monster
var isPaused = false;               // pause
var end = false;                    // dialog for ending the game
var prox1 = false;                  // #1 monster proximity
var prox2 = false;                  // #2 monster proximity
var prox3 = false;                  // #3 monster proximity
var prox4 = false;                  // #4 monster proximity
var prox5 = false;                  // #5 monster proximity
var collected1 = false;             // #1 monster check if already collected
var collected2 = false;             // #2 monster check if already collected
var collected3 = false;             // #3 monster check if already collected
var collected4 = false;             // #4 monster check if already collected
var collected5 = false;             // #5 monster check if already collected
var lastDir = 'right';              // last direction player was facing before stopping

var startReady;
var start;
var bgReady;
var bg;
var characterReady;
var character;
var monsterReady1;
var monsterImage1;
var monsterReady2;
var monsterImage2;
var monsterReady3;
var monsterImage3;
var monsterReady4;
var monsterImage4;
var monsterReady5;
var monsterImage5;


// Handle keyboard controls
var keysDown = {};
addEventListener("keydown", function (e) { keysDown[e.keyCode] = true; }, false);
addEventListener("keyup", function (e) { delete keysDown[e.keyCode]; }, false);


function loadImages () {
    // Start screen background image
    startReady = false;
    start = new Image();
    start.onload = function () { startReady = true; };
    start.src = "images/start.png";
    start.width = 600;
    start.height = 450;
    
    // Background image
    bgReady = false;
    bg = new Image();
    bg.onload = function () { bgReady = true; };
    bg.src = "images/background.png";

    // Character image
    characterReady = false;
    character = new Image();
    character.onload = function () {characterReady = true; };
    character.src = 'images/hero-sprites.png';

    // 1st Monster image
    monsterReady1 = false;
    monsterImage1 = new Image();
    monsterImage1.onload = function () { monsterReady1 = true; };
    monsterImage1.src = "images/monster.png";
    
    // 2nd Monster image
    monsterReady2 = false;
    monsterImage2 = new Image();
    monsterImage2.onload = function() { monsterReady2 = true; }
    monsterImage2.src = "images/monster2.png";

    // 3rd Monster image
    monsterReady3 = false;
    monsterImage3 = new Image();
    monsterImage3.onload = function() { monsterReady3 = true; }
    monsterImage3.src = "images/monster3.png";

    // 4th Monster image
    monsterReady4 = false;
    monsterImage4 = new Image();
    monsterImage4.onload = function() { monsterReady4 = true; }
    monsterImage4.src = "images/monster4.png";

    // 5th Monster image
    monsterReady5 = false;
    monsterImage5 = new Image();
    monsterImage5.onload = function() { monsterReady5 = true; }
    monsterImage5.src = "images/monster5.png";
}