var soldier, alienBoss, alienArmy, alienGroup;
var alienHealth, healthBar;
var life , bullets, bulletsGroup;
var invisibleGround, bgsprite;
var score = 0;
var gameState;
var PLAY, END, LEVEL1;

function preload() {
  lifeImg = loadImage("images/life.png");
  soldierStanding = loadImage("images/standing.png")
  soldierRunning = loadAnimation("images/jumping1.png", "images/jumping4.png")
  soldierJumping = loadAnimation("images/jumping1.png", "images/jumping2.png", "images/jumping3.png",
    "images/jumping4.png", "images/jumping5.png", "images/jumping6.png");
  soldierShooting = loadImage("images/soldiershooting.png");
  alienBossRunning = loadAnimation("images/alien1.png", "images/alien2.png", "images/alien3.png");
  alienArmyImg = loadImage("images/alienarmy.png");
  bgImg = loadImage("images/bg1.png")
}

function setup() {
  createCanvas(1000, 500);

  PLAY = 1;
  END = 0;
  LEVEL1 = 2;

  gameState = PLAY;

  life = 3;
  alienHealth = 100;

  bgsprite = createSprite(width / 2, height / 2, 100, 100)
  bgsprite.addImage(bgImg);
  bgsprite.scale = 6;

  soldier = createSprite(200, 440, 50, 80);
  soldier.addImage(soldierStanding);
  soldier.scale = 0.5;
  soldier.addAnimation("run", soldierRunning);
  soldier.addAnimation("jump", soldierJumping);
  soldier.addImage("standing", soldierStanding);
  soldier.addImage("shoot", soldierShooting);
  soldier.setCollider("rectangle", 0, 30, 250, 300);

  alienGroup = new Group();
  bulletsGroup = new Group();

  invisibleGround = createSprite(500, 490, 1000, 20);
  invisibleGround.visible = false;

}

function draw() {
  background("black");

  if (gameState == PLAY) {
    play();
  }

  if (gameState == LEVEL1) {
    level1();
  }

  drawSprites();

  displayLives();

  displayScore();
}
