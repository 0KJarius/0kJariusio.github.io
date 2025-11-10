const gameBoard = document.getElementById("snakeBoard");
const continueText = document.getElementById("continueText");
const scoreText = document.getElementById("score");
const gameBoardSize = 40;

let currentScore = 0;
let solidSnake = [{x: 20, y: 20}];
let yummy = yummyGenerate();
let movementDirection = 'left';
let gameInerval;
let gameSpeed = 150;
let isGameStarted = false;

let scoreSFX;
let deathSFX;

function update(){
    gameBoard.innerHTML = '';
    drawSnake();
    drawFood();
}

function drawSnake(){
    solidSnake.forEach((solid) =>{
        const solidSnakeElement = createGameElement('div', 'snake');
        setGameElementPosition(solidSnakeElement, solid);
        gameBoard.appendChild(solidSnakeElement);
    })
}

function createGameElement(HTMLtag, className){
    const gameElement = document.createElement(HTMLtag);
    gameElement.className = className;
    return gameElement;
}

function setGameElementPosition(gameElement, position){
    gameElement.style.gridColumn = position.x;
    gameElement.style.gridRow = position.y;

}

function drawFood(){
    const newYummy = createGameElement('div', 'food');
    setGameElementPosition(newYummy, yummy);
    gameBoard.appendChild(newYummy);
}

function yummyGenerate(){
    let x = Math.floor(Math.random() * gameBoardSize) + 1;
    let y = Math.floor(Math.random() * gameBoardSize) + 1;
    return {x, y};
}

function moveSnake(){
    const solidSnakeHead = {... solidSnake[0]};
    switch (movementDirection) {
        case 'up':
            solidSnakeHead.y--;
            break;
        case 'down':
            solidSnakeHead.y++;
            break;
        case 'left':
            solidSnakeHead.x--;
            break;
        case 'right':
            solidSnakeHead.x++;
            break;
    }

    solidSnake.unshift(solidSnakeHead);

    if(solidSnakeHead.x === yummy.x && solidSnakeHead.y === yummy.y){
        scoreSFX.play();
        currentScore++;
        document.getElementById("score").textContent = currentScore.toString().padStart(3,"0");

        yummy = yummyGenerate();
        clearInterval(gameInerval);
        gameInerval = setInterval(() => {
            moveSnake();
            collisionChecker();
            update();
        }, gameSpeed);

    } else {
        solidSnake.pop();
    }

}

function gameStart(){
    isGameStarted = true;
    continueText.style.display = 'none';
    
    scoreSFX = new soundFX("score.mp3");
    deathSFX = new soundFX("death.mp3");

    gameInerval = setInterval(() =>{
        moveSnake();
        collisionChecker();
        update();
    }, gameSpeed);
}

function collisionChecker(){
    const solidHead = solidSnake[0];
    if ((solidHead.x < 1) || (solidHead.x > gameBoardSize) || (solidHead.y < 1) || (solidHead.y > gameBoardSize)){
        gameReset();
        deathSFX.play();
    }
    
    for(let i = 1; i < solidSnake.length; i++){
        if (solidHead.x === solidSnake[i].x && solidHead.y === solidSnake[i].y){
            gameReset();
            deathSFX.play();
        }
    }
}

function speedUpGame(){
    if(gameSpeed > 145){
        gameSpeed -= 5;
    } else if (gameSpeed > 120){
        gameSpeed -= 4;
    } else if (gameSpeed > 90){
        gameSpeed -= 3;
    } else if (gameSpeed < 90){
        gameSpeed -= 3;
    }
}


function eventHandler(event){
    if ((!isGameStarted && event.code === "Space") || (!isGameStarted && event.key === " ")){
        currentScore = 0;
        document.getElementById("score").textContent = currentScore.toString().padStart(3,"0");
        gameStart();
    } else {
        switch(event.key){
            case 'W':
            case 'w':
            case 'ArrowUp':
                movementDirection = 'up';
                break;
            case 'S':
            case 's':
            case 'ArrowDown':
                movementDirection = 'down';
                break;
            case 'A':
            case 'a':
            case 'ArrowLeft':
                movementDirection = 'left';
                break;
            case 'D':
            case 'd':
            case 'ArrowRight':
                movementDirection = 'right';
                break;
        }
    }
}

function gameReset(){
    solidSnake = [{x: 20, y: 20}];
    yummy = yummyGenerate();
    movementDirection = 'left';
    gameSpeed = 150;
    
    gameStop();
}

function gameStop(){
    clearInterval(gameInerval);
    isGameStarted = false;
    continueText.style.display = 'block';
}

function soundFX(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

document.addEventListener('keydown', eventHandler);
document.getElementById("returnButton").addEventListener("click", function() {
    location.href = "../index.html";
});

