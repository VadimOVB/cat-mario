scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
info.onLifeZero(function () {
	
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . 1 . . . . . 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 f 1 1 f 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 f 1 f f 1 . . . . . 
    . . . . 1 1 1 f f 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 . 1 1 1 1 1 1 1 . 1 1 . . 
    . 1 1 . 1 1 1 1 1 1 1 . 1 1 . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 . . . 1 1 1 . . . . 
    . . . 1 1 1 . . . 1 1 1 . . . . 
    . . . 1 1 1 . . . 1 1 1 . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 400
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
info.setLife(0)
spriteutils.setLifeImage(img`
    e 2 2 . . . 2 2 e 
    2 e 2 2 . 2 2 e 2 
    2 2 e 2 2 2 e 2 2 
    2 2 2 e 2 e 2 2 2 
    . 2 2 e e e 2 2 . 
    . . e 2 2 2 e . . 
    . e . 2 2 2 . e . 
    e . . . 2 . . . e 
    `)
for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 f f 1 1 f f 1 1 1 1 1 f . 
        . f 1 f f 1 1 f f 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 f 1 f 1 f 1 1 1 1 1 f . 
        . f 1 1 1 f 1 f 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    if (Math.percentChance(50)) {
        mySprite2.vx = 50
    } else {
        mySprite2.vx = -50
    }
    mySprite2.setBounceOnWall(true)
}
forever(function () {
    music.playMelody("A - - F - - C - ", 700)
    music.playMelody("- - - - - - - - ", 700)
    music.playMelody("D - - G G - - - ", 700)
    music.playMelody("E E - - - - - - ", 700)
    music.playMelody("A - - F - - C - ", 700)
    music.playMelody("- - - - - - - - ", 700)
    music.playMelody("D A - F - D - C ", 700)
    music.playMelody("- - - - - - - - ", 700)
    music.playMelody("C C A A G G E E ", 700)
    music.playMelody("D D E E - - G G ", 700)
    music.playMelody("E E - - D D - - ", 700)
    music.playMelody("G G - G - G - - ", 700)
    music.playMelody("G G G G G G G G ", 700)
    music.playMelody("- - - - - - - - ", 700)
    music.playMelody("E - E - - - - G ", 700)
    music.playMelody("- - - - - - - - ", 700)
    music.playMelody("F - - D - - D - ", 700)
    music.playMelody("- - D - G - - E ", 700)
})
