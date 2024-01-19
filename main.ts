scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    key = game.askForNumber("what key")
    if (key == 125) {
        tiles.setWallAt(tiles.getTileLocation(7, 17), false)
        tiles.setWallAt(tiles.getTileLocation(8, 17), false)
        tiles.setTileAt(tiles.getTileLocation(7, 16), sprites.castle.tilePath4)
        tiles.setTileAt(tiles.getTileLocation(8, 16), sprites.castle.tilePath6)
    }
})
let key = 0
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
scene.cameraFollowSprite(player1)
player1.setPosition(0, 25)
controller.moveSprite(player1)
