class telaCadastro extends Phaser.Scene {
    constructor() {
      super({ key: 'telaCadastro' });
    }

    //botão para mudar a cena
    botaoClicado (teste) {
      //Posicionar a imagem no eixo X e no eixo Y 
      teste.setVisible(!teste.visible)
      //Adiciona próxima pagina com os templates
     }

    //META: FUNCIONALIDADE DE DESCER A PÁGINA
    //META: APERTAR O BOTÃO E MUDAR DE PÁGINA
    //META: SAIR DO COMPUTADOR PARA A CENA DO QUARTO

    preload() {
    
    //carrega o cenário do Notebook, o background e a página web
    this.load.image("notebook", "assets/telaCadastro/notebookPrototipo.png");
    this.load.image("bg", "assets/telaCadastro/bg.png");
    this.load.svg("pagina", "assets/telaCadastro/telaT.svg");
    this.load.image("botao1", "assets/telaCadastro/botao1.png");
    this.load.image("pagina2", "assets/telaCadastro/tela2.png");

    };x

    create() {  

    //adiciona o cenário do Noteboo k, o background e a página web
    this.add.image(gameState.mediaWidth, gameState.mediaHeight, "bg").setScale(0.7);
    this.add.image(gameState.mediaWidth, gameState.mediaHeight + 5, "notebook").setScale(0.54);
    let pagina1 = this.add.image(gameState.mediaWidth, gameState.mediaHeight - 100, "pagina").setScale(1);
    let botao1 = this.add.image(gameState.mediaWidth - 200, gameState.mediaHeight + 130, "botao1").setScale(1).setInteractive();
    let pagina2 = this.add.image(gameState.mediaWidth, gameState.mediaHeight - 100, "pagina2").setScale(0.54);

    pagina2.setVisible(!pagina2.visible)

    botao1.on("pointerdown", () => {
      botao1.setVisible(!botao1.visible)
      pagina1.setVisible(!pagina1.visible)
      //botao1.setVisible(!botao1.visible)
      pagina2.setVisible(!pagina2.visible)
    })

    };

}
