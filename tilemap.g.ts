// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000060707070707070707070707070707080501010101010a0a0a0a0a0a0a0a0a090501010101010a0a0a0a0a0a0a0a0a09050c0c0c0c0c0a0a0a0a0a0a0a0a0a09050c0c0c0c0c0a0a0a0a0a0a0a0a0a09050c0c0c0c0c0a0a0a0a0a0a0a0a0a09050c0c0c0c0c0a0a0d0d0d0d0a0a0a09050c0c0c0c0c0a0a0d0d0d0d0a0a0a09050b0b0b0b0b0a0a0d0d0d0d0a0a0a09050b0b0b0b0b0a0a0a0a0a0a0a0a0a09050b0b0b0b0b0a0a0a0a0a0a0a0a0a09050a0a0a0a0a0a0a0a0a0a0a0a0a0a09050a0a0a0a0a0a0a0a0a0a0a0a0a0a09050a0a0a0a0a0a0a0a0a0a0a0a0a0a09050a0a0a0a0a0a0a0a0a0a0a0a0a0a0902030303030303030303030303030304`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile3":return tile3;
            case "tilePath5":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
