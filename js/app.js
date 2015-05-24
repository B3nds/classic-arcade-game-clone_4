
// Enemies our player must avoid
var Enemy = function() {
    this.x = 0;
    this.y = 230 * Math.random();
    this.speed = 500 + Math.random();
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     this.x = this.x + this.speed *dt;
     if(this.x> 505) {
        this.x = this.x - 600;
        this.y = 230 * Math.random();

    }
};

// Enemies our player must avoid
var Enemy = function() {
    this.x = 0;
    this.y = 230 * Math.random();
    this.speed = 500 + Math.random();
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     this.x = this.x + this.speed *dt;
     if(this.x> 505) {
        this.x = this.x - 600;
        this.y = 230 * Math.random();

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Did images collide? This function check for collision
checkCollisions = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if (player.x < allEnemies[i].x+60 && player.x+60> allEnemies[i].x && player.y < allEnemies[i].y+40 && player.y+40 > allEnemies[i].y){  
            player.reset();
        }
    }
};

// Now write your own player class
var Player = function() {
    this.speed = 100; 
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';

};

// This class requires an update(), render() and
// a handleInput() method.
//Simply checking for the win or lose
Player.prototype.update = function() {
    if (this.y <= -15){
        player.reset();
    }
    checkCollisions();
};

//rendering the player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//handling the input
Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        if (this.x - 101 >= -2){
            this.x -= 101;
        }
    } else if (key === 'right'){
        if (this.x + 101 <= 420){
            this.x += 101;
        }
    } else if (key === 'up'){
        if (this.y - 83 >= -15){
            this.y -= 83;
        }
    } else if (key === 'down'){
        if (this.y + 83 <= 420){
            this.y += 83;
        }
    } else {
        return false;
    }
};

//setting the reset location
Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;
};
// Now i instantiate our objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. I didn't even modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});