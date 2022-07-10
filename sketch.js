const World = Matter.World;
const Engine = Matter.World;
const Bodies = Matter.World;
const Constraint = Matter.World;

var jogador;
var chaoInvisivel, paredeEsquerda, fundoJg, imgFundoJg;
var btnPlay;
var btnCreditos;
var btnMute;
var backgroundImg, playImg, exitImg, soundImg;
var gameState = "waiting";

function preload(){
    //Carregar imagens
    imgFundoJg = loadImage("Acid (2).png");
    backgroundImg = loadImage("BGTitle (7)")
    playImg = loadImage("Play col_Button");
    exitImg = loadImage("Exit col_Button");
    soundImg = loadImage("Audio col_Square Button");
}

function setup(){
    createCanvas(800,600);

    jogador = createSprite(100,525,20,20);
    jogador.visible = false;
    
    fundoJg = createSprite(400,300);
    fundoJg.visible = false;

    chaoInvisivel = createSprite(400,550,800,20);
    chaoInvisivel.visible = false;

    btnPlay = createSprite(400,100,60,20);
    btnPlay.shapeColor = "red";

    btnCreditos = createSprite(400,150,60,20);
    btnCreditos.shapeColor = "blue";

    btnMute = createSprite(730,50,20,20);
    btnMute.shapeColor = "green";
    btnMute.visible = false;

    paredeDireita = createSprite(400,300,20,800);
    paredeDireita.visible = false;

    //criar botao voltar
    btnVoltar = createSprite(775,25,50,50);
    btnVoltar.shapeColor = "yellow";
    btnVoltar.visible = false;
}

function draw(){
    background(backgroundImg);

    if(mousePressedOver(btnPlay)){
        gameState = "playing";
    }

    //mousePressedOver btnCreditos / mute
    if(mousePressedOver(btnCreditos)){

        fill("black");
        textSize(30);
        text("JOGO CRIADO POR ANGELO...",300,400,); 

        btnVoltar.visible = true;
        btnPlay.visible = false;
        btnCreditos.visible = false;
    }
    
    if(mousePressedOver(btnVoltar)){
        btnVoltar.visible = false;
        btnPlay.visible = true;
        btnCreditos.visible = true;   
    }

    if(mousePressedOver(btnMute)){
        //soudx.stop();
    }


    
    
    if(gameState === "playing"){
        btnPlay.visible = false;
        btnCreditos.visible = false;
        jogador.visible = true;
        fundo.visible = true;
        btnMute.visible = true;

        jogador.velocityX = 2;
        fundo.velocityX = -2;

        if(keyDown("space")) {
            jogador.velocityY = -11;
        }
        
        jogador.velocityY = jogador.velocityY + 1;

        if(fundo.x === -1000){
            jogador.velocityX = 0;
            fundo.velocityX = -0;
        }

        console.log(fundo.x);

    }

    jogador.collide(chaoInvisivel);
    jogador.collide(paredeDireita);

    console.log(gameState);

    drawSprites();
}

