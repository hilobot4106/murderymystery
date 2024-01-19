// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001070707070707070707070707070706080808080909090909090a090909090508080808090909090909090909090905020908080909090909090909090909050209080809090909090909090909090502090808090909090909090909090905020908080909090909090909090909050209080809090909090909090909090502090808090909090909090909090905020908080909090909090909090909050209080809090909090909090909090502090808090909090909090909090905020908080808080808080808080b0808020908080808080808080808080b08080209090909090909090909090909090503040404040404040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 2 . . . 2 . . . . 2 2 
. . . . 2 2 . 2 2 2 . . . . 2 2 
2 2 . . 2 2 . 2 . 2 2 2 2 . 2 2 
. 2 . . 2 2 . . . . . . 2 . 2 2 
. 2 . . 2 2 . 2 2 2 2 2 2 . 2 2 
. 2 . . 2 2 . 2 . . . . 2 . 2 2 
. 2 . . 2 2 . 2 . 2 2 2 2 . 2 2 
. 2 . . 2 2 . . . . . . . . 2 2 
. 2 . . 2 2 2 2 2 2 . 2 2 2 2 2 
. 2 . . 2 . . . . 2 . 2 . . . 2 
. 2 . . 2 2 2 2 2 2 . 2 2 2 2 2 
. 2 . . . . . . . . . . . 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleInsignia,sprites.builtin.coral2,sprites.dungeon.collectibleRedCrystal,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
