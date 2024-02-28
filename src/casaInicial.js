class CasaInicial extends Phaser.Scene {
  constructor() {
    super({ key: 'CasaInicial' });
  }

  preload() {
    // carrega Asset da casa que ao fundo
    this.load.svg("casa", "/../assets/casaInicial/room.svg");

    // carrega os dois estados do post-it
    this.load.svg("papel_peq", "/../assets/casaInicial/papel_peq.svg");
    this.load.svg("papel_grand", "/../assets/casaInicial/papel_grande.svg")

    // carrega os demais móveis interagíveis
    this.load.svg("pc", "/../assets/casaInicial/pc.svg");
    this.load.svg("cama", "/../assets/casaInicial/Cama.svg");

    // carrega spritesheet da barra de progresso e especifica tamanho
    this.load.spritesheet({
      key: 'barra_progresso',
      url: '/../assets/casaInicial/barra de progresso.svg',
      frameConfig: {
        frameWidth: 300,
        frameHeight: 45
      }
    });

    // carrega spritesheet do balão de fala e especifica tamanho
    this.load.spritesheet({
      key: 'balao_fala',
      url: '/../assets/casaInicial/Balões de diálogo.svg',
      frameConfig: {
        frameWidth: 1800,
        frameHeight: 360
      }
    })
  }

  create() {
    // inicia cena com o cursosr padrão
    this.input.setDefaultCursor("default");

    // Adiciona e justa as dimensões da casa de acordo com o tamanho da tela
    this.casaBackground = this.add.image(gameState.mediaWidth, gameState.mediaHeight, "casa");
    this.casaBackground.setScale(gameState.gameHeight / this.casaBackground.height);
    this.cameras.main.setBackgroundColor('#d1d1d1'); // definição da cor de fundo (pode ser alterada mudando o hexadecimal)

    // adiciona sprite do computador e ajusta as dimensões
    this.pcCasa = this.add.image(gameState.mediaWidth + 64, gameState.mediaHeight + 25, "pc");
    this.pcCasa.setScale(0.5);
    this.pcCasa.setInteractive();

    this.pcCasa.on("pointerdown", () =>{
      this.scene.start('telaCadastro');
      this.scene.stop('CasaInicial');
    })

    // adiciona sprite da cama e ajusta as dimensões
    this.cama = this.add.image(gameState.mediaWidth * 0.82, gameState.mediaHeight * 1.4, "cama")
    this.cama.setScale((gameState.mediaHeight / this.cama.height) * 1.2);

    // cria lista com os sprites de papel que serão alternados
    this.trocaPapel = ['papel_peq', 'papel_grand']

    // adiciona papel na tela no sprite 0 e ajusta as dimensões
    this.papel = this.add.image(gameState.mediaWidth * 1.03, gameState.mediaHeight * 0.95, this.trocaPapel[0])
    this.papel.setScale((gameState.mediaHeight / this.papel.height) * 0.18);
    this.papel.setInteractive(); // torna o papel interativo
    this.papel.pequeno = true; // variavél de controle para verificar o estado atual do papel (pequeno -> true ou grande -> false)

    // mudanças do cursor durante interação com o papel
    this.papel.on("pointerover", () => {
      this.input.setDefaultCursor("pointer"); // muda para cursor de clique se o mouse está no papel
    });
    this.papel.on("pointerout", () => {
      this.input.setDefaultCursor("default"); // retorna ao cursor default ao sair do papel
    });

    // define as ações ao clicar no papel
    this.papel.on("pointerdown", () => {
      if (this.papel.pequeno == true) {
        // se o papel estiver pequeno, troca para o grande, configura as dimensões e centraliza na tela 
        this.papel.setTexture(this.trocaPapel[1])
        this.papel.setScale((gameState.mediaHeight / this.papel.height) * 2);
        this.papel.setPosition(gameState.mediaWidth, gameState.mediaHeight);
        this.papel.pequeno = false; // define que agora o papel não está pequeno
      }
      else if (this.papel.pequeno == false) {
        // se o papel não estiver pequeno, reverte para o papel pequeno e reestabelece as configurações iniciais
        this.papel.setTexture(this.trocaPapel[0])
        this.papel.setScale((gameState.mediaHeight / this.papel.height) * 0.18);
        this.papel.setPosition(gameState.mediaWidth * 1.03, gameState.mediaHeight * 0.95);
        this.papel.pequeno = true; // define que o papel voltou a ser pequeno
      }
    })

    // adiciona a barra de progresso no frame inicial e ajusta as dimensões 
    this.progresso = this.add.sprite(gameState.mediaWidth * 0.3, gameState.mediaHeight * 0.15, 'barra_progresso');
    this.progresso.setFrame(0);
    this.progresso.setScale(((gameState.mediaHeight / this.progresso.height) * 0.2))

    this.dialogo = this.add.sprite(gameState.mediaWidth * 1.65, gameState.mediaHeight * 0.2, 'balao_fala');
    this.dialogo.setFrame(1);
    this.dialogo.setScale((gameState.mediaHeight / this.dialogo.height) * 0.4)
  }


  update() {

  }
}