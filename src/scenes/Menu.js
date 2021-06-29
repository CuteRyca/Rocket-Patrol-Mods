class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    
    preload(){
        //load audio
        this.load.audio('background_music', './assets/bensound-cute.mp3');
        this.load.audio('sfx_explosion', './assets/die.wav');
        this.load.audio('sfx_rocket', './assets/gunshot.wav');
        this.load.image('blue','./assets/blue.png');
    }
    create(){
        this.blue = this.add.tileSprite(0, 0, 640, 480, 'blue').setOrigin(0,0);

        let menuConfig = {
            fontFamily: 'fantasy',
            fontSize: '30px',
            backgroundColor: '#DAF7A6',
            color:'#FFC300',
            align: 'right',
            padding:{
                top: 5, bottom: 5,
            },
            fixedWidth: 0
        }
        
        menuConfig.color = "#AD1399";
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        
        menuConfig.color = "#B51C06FF";
        this.add.text(game.config.width/2, game.config.height/2, 'Use <=> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#DAF7A6";
        this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding),'Press <= of Novice or => Expert', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings = {
                spaceshipSpeed: 3,
                eagleSpeed: 5,
                gameTimer : 60000
            }
            this.sound.play('background_music');
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            game.settings = {
                spaceshipSpeed: 4,
                eagleSpeed: 6,
                gameTimer : 45000
            }
            this.sound.play('background_music');
            this.scene.start('playScene');
        }
    }
}