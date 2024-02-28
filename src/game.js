var gameState = {
  gameWidth: window.innerWidth * Math.max(1, window.devicePixelRatio / 2),          // 960 
  gameHeight: window.innerHeight * Math.max(1, window.devicePixelRatio / 2),        // 540 
  mediaWidth: (window.innerWidth * Math.max(1, window.devicePixelRatio / 2)) / 2,   // 480
  mediaHeight: (window.innerHeight * Math.max(1, window.devicePixelRatio / 2)) / 2, // 270
}

var config = {
  type: Phaser.AUTO,
  width: gameState.gameWidth, //define a largura do quadro
  height: gameState.gameHeight, //define a altura do quadro

<<<<<<< HEAD
  scene: [telaCadastro]
=======
  scene: [TelaInicial, CasaInicial],
  physics: {
    default: 'arcade',
    // arcade:{
    //   gravity: {y: 300},
    // },
    debug: true,
  }
>>>>>>> 9418c38ede9828d9b4e37c4259c59a924bcd9513
}; 

var game = new Phaser.Game(config);