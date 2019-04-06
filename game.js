var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};
var game = new Phaser.Game(config);

function preload() {
    this.load.image('leo', 'assets/sprites/Leobig.png');
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create() {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var leo = this.physics.add.image(400, 100, 'leo');

    leo.setVelocity(100, 200);
    leo.setBounce(1, 1);
    leo.setCollideWorldBounds(true);
    emitter.startFollow(leo);
}


// var sprite = game.add.sprite(game.world.randomX, game.world.randomY, 'disk');

//         //  Pick a random number between -2 and 6
//         var rand = game.rnd.realInRange(-2, 6);

//         //  Set the scale of the sprite to the random value
//         sprite.scale.setTo(rand, rand);

//         //  You can also scale sprites like this:
//         //  sprite.scale.x = value;
//         //  sprite.scale.y = value;
