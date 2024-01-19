tiles.setCurrentTilemap(tilemap`level1`)
let player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . f f . . f . . . . . . . 
    . . . . f f . . f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . f f . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 . . . 2 2 . . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . . 2 . . . 2 2 . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . 2 . . 2 . . . 2 2 . . . 
    . . . . . 2 . 2 . 2 2 . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 . 2 . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(player1)
controller.player2.moveSprite(player2)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, player1)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, player2)
player1.setPosition(0, 25)
player2.setPosition(0, 25)
scene.cameraFollowSprite(player1)
