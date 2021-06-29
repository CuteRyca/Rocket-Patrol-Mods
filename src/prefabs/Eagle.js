class Eagle extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, eaglePoint){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = eaglePoint;
        this.moveSpeed = game.settings.eagleSpeed;
    }
    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }
}