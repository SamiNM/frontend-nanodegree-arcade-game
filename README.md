# frontend-nanodegree-arcade-game

Frontend nanodegree arcade game is project that is part of frontend developer online course run by udacity.
to get more info about the course [here](https://udacity.com/) and if you want the orginal source code [here](https://github.com/udacity/frontend-nanodegree-arcade-game).


## Arcade Game 
Arcade Game is a game that you can spend an enjoyable fun time playing with it.

## Picture of the Game
![Game Image](images/CaptureFromTheGame.jpg )



## Starting
All you need to run the game is a browser and you are good to go.


## Playing 
You have to move toward the water and try to avoid the Bugs otherwise the Bugs will kill you and obviously you lose.
Everytime you reach to the water you will get one score.
*the games takes one of four inputs:*
- *Left key* to go _left_ one block.
- *Up key* to go _up_ one block.
- *Right key* to go _right_ one block.
- *Down key* to go _down_ one block.



## the game consist of two classes :
- ## Player Class:-
    ```
    var Player = function() {
    
    this.x = 202;
    this.y = 380;

    this.sprite = 'images/char-boy.png';
    
    };
    ```
    - ### Player class has 3 methods:
    1. Update method to update the the status of the Player object
    ```
    Player.prototype.update
    ```
    2. render method to Draw the player on the screen
    ```
    Player.prototype.render
    ```
    3. hnadleInput to handle the keyup entered by the user 
    ```
    Player.prototype.handleInput
    ```
    
- ## Enamy Class
    ```
    var Enemy = function(speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x =-101;
    this.y = 60;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.speed = ((Math.random() +1 )* 200);
	this.speed = (Math.random() + 1) * this.speed ;
    this.sprite = 'images/enemy-bug.png';
    
    };    
    ```
    ### Enamy class has 2 methods:
    1. update method to update the class objects
    ```
    Enemy.prototype.update
    ```
    2. render method to Draw the enamy on the screen
    ```
    Enemy.prototype.render
    ```
    
    
Instantiate objects:
    ```
    var allEnemies = [new Enemy(100),new Enemy(),new Enemy(100),new Enemy(),new Enemy(),new Enemy(100)];
    allEnemies[1].y = 145;
    allEnemies[2].y = 230;
    allEnemies[4].y = 230;
    allEnemies[5].y = 145;
    var player = new Player();
    ```
