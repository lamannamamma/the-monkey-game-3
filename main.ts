enum RadioMessage {
    message1 = 49434
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(assets.image`blank`, mySprite, 0, 0)
    projectile2.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile2,
    assets.animation`splode0`,
    100,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`blank`, mySprite, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode0`,
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`gold crate`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`orange bauble`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += -10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    150,
    false
    )
})
function createEnemie () {
    for (let value1 of tiles.getTilesByType(assets.tile`transparency16`)) {
        chaser = sprites.create(assets.image`man`, SpriteKind.Enemy)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.setColor(7, 2)
        tiles.placeOnTile(chaser, value1)
        tiles.setTileAt(value1, assets.tile`transparency16`)
        chaser.follow(mySprite, 100)
        projectile3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, chaser, 100, 0)
        animation.runImageAnimation(
        chaser,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite2), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite2), CollisionDirection.Bottom), assets.tile`bounce`)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    150,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`walk right0`,
    150,
    false
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += -1
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function createStatusBar () {
    statusbar.attachToSprite(chaser)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
    music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000427000400080001270c001000021e2214001800012718001c00021d221c002000012724002800021e2407001c00020a006400f401640000040000000000000000000000000000000003070030003400022024`), music.PlaybackMode.LoopingInBackground)
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        animation.runMovementAnimation(
        mySprite2,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        mySprite.say("level2", 500)
    } else {
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        mySprite.say("level2", 500)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`walk left0`,
    150,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`background0`)
    tiles.setCurrentTilemap(tilemap`level8`)
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite3.ay = 500
    mySprite3.follow(mySprite, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest0`, function (sprite, location) {
    game.over(true, effects.blizzard)
    game.splash("to be continued")
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.splash(" player2 connected!")
    mySprite2 = sprites.create(assets.image`stand`, SpriteKind.Player)
    info.setLife(5)
    controller.player2.moveSprite(mySprite2, 100, 0)
    mySprite2.ay = 500
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`rock right`, function (sprite, location) {
    sprites.destroy(mySprite3, effects.fountain, 500)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let mySprite3: Sprite = null
let projectile3: Sprite = null
let statusbar: StatusBarSprite = null
let chaser: Sprite = null
let mySprite2: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let statusbar2: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background0`)
tiles.setTilemap(tilemap`level1`)
music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a00000400000000000000000000000000000000022a0008000c00011610001400011618001c00011620002400011628002c00011630003400011638003c00011606001c00010a006400f401640000040000000000000000000000000000000002450004000800010c0c001000020f2410001400012014001800010c1c002000020f2420002400012224002800010c2c003000020f2430003400012234003800010c3c004000010f09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8002a0008000900010a10001100010a18001900010a20002100010a28002900010a30003100010a38003900010a`), music.PlaybackMode.LoopingInBackground)
music.setVolume(255)
mySprite = sprites.create(assets.image`stand0`, SpriteKind.Player)
statusbar2 = statusbars.create(20, 2, StatusBarKind.Health)
statusbar2.setColor(7, 2)
statusbar2.attachToSprite(mySprite)
info.setLife(10)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
