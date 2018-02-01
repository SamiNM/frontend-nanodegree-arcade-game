// counter varibale to keep tracking the scores
var count = 0;

// function to display the scores in the canvas
var Counting = function(){
    ctx.fillStyle = "balck";
    ctx.font = "bold 20px Comic Sans MS";
    ctx.fillText("Scores: "+ count , ctx.canvas.width / 50 - 5,  ctx.canvas.height / 6, 80);

}


// Enemies our player must avoid
var Enemy = function(speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x =-101;
    this.y = 60;
    
    // seting the speed of the enamy between 50 and 199 
    this.speed = speed || ((Math.random() +1 )* 200) % 200 + 50;
	this.speed = (Math.random() + 1) * this.speed ;
    
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.    
    if(this.x < 500){
        this.x += this.speed * dt;
    }
    else {
        this.x = -101;
        this.x += this.speed * dt;
    
    }
    // detecting the collision between the player and the enamies
    // if it happend then the player object reset and lose the scores 
        if((player.y - 41.5 ) < this.y  && (player.y + 41.5 ) > this.y ){
            if((player.x - 30 ) <= (this.x + 30 ) && (player.x + 30 ) >= (this.x - 30 )){
                player.x = 202;
                player.y = 380;
                count = 0;
           }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player class 
var Player = function() {
    
    this.x = 202;
    this.y = 380;

    this.sprite = 'images/char-boy.png';
    
};

// updating player object 
Player.prototype.update = function(){
    if(this.y < 48 ){   
        this.x = 202;
        this.y = 380;
        count += 1;
    }
    
};

// Draw the player on the screen
Player.prototype.render = function(){
    Counting();
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handling the inputs of the user  
Player.prototype.handleInput = function(code){
    switch(code){
        case "left":
            if(this.x > 0 ){
                this.x = this.x - 101;
            }
            break;
        case "up":
            this.y = this.y - 83;
            break;
        case "right":
            if(this.x < 304 ){
                this.x = this.x + 101;
            }
            break;
        case "down":
            if(this.y < 300 ){
                this.y = this.y + 83;
            }
            break;
    }
};

// Now instantiate objects.
// Placing all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(100),new Enemy(),new Enemy(100),new Enemy(),new Enemy(),new Enemy(100)];
allEnemies[1].y = 145;
allEnemies[2].y = 230;
allEnemies[4].y = 230;
allEnemies[5].y = 145;


// Placing the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
