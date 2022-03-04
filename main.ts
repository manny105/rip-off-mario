namespace SpriteKind {
    export const fesprit = SpriteKind.create()
    export const boo = SpriteKind.create()
    export const bouh = SpriteKind.create()
    export const trucnoir = SpriteKind.create()
    export const bowser = SpriteKind.create()
    export const fleur = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const champ1up = SpriteKind.create()
    export const gumpa = SpriteKind.create()
    export const bdf = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile28`, function (sprite, location) {
    info.changeScoreBy(1)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile62`, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    for (let value of tiles.getTilesByType(assets.tile`tile46`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
})
function startbonus2 () {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile53`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . f 5 5 5 f f f 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . f 5 5 5 f f f 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 f f f 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 f f 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 f f 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 f f f 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`tile61`)) {
        champi_1up = sprites.create(img`
            . . . . . f f f f f f . . . . . 
            . . . f f f 1 7 7 1 f f f . . . 
            . . f f 1 1 1 7 7 1 1 1 f f . . 
            . f f 7 1 1 7 7 7 7 1 1 7 f f . 
            . f 1 7 7 7 7 7 7 7 7 7 7 1 f . 
            f f 1 1 7 7 1 1 1 1 7 7 1 1 f f 
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f 
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f 
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f 
            f 7 7 7 7 7 1 1 1 1 7 7 7 7 7 f 
            f 7 7 f f f f f f f f f f 7 7 f 
            f f f f 1 1 f 1 1 f 1 1 f f f f 
            . f f 1 1 1 f 1 1 f 1 1 1 f f . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 1 f f . . 
            . . . f f f f f f f f f f . . . 
            `, SpriteKind.champ1up)
        tiles.placeOnTile(champi_1up, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -150
    }
})
scene.onHitWall(SpriteKind.bdf, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile38`, function (sprite, location) {
    if (controller.up.isPressed()) {
        spawn = "lvl"
        startbowser()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.champ1up, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 300)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
function startbowser () {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile46`)) {
        bowser = sprites.create(img`
            ...............f...f....................
            ..............f1f.f1f...................
            .............f144f11f...................
            ..........fff44ff111f.ff................
            .........f11fff1111fff11f...............
            .......ff1444f11111f441f................
            ......f144ff77f111f414f.................
            .......ff11f777fff44411ff...............
            ....ffff111f777777f444414f..............
            ...f444ff11f777777f4444444f.............
            ..f44444f1f77777777f4111f4f.............
            ..f444444f77ff77777f4441ff..............
            ..f4444444ff44f7777f14411f..............
            ...f14444444444f777ff14441f.............
            ...f1f114444444f77ffff44f4f.............
            ....ff11ff11f44fff111fff1f..............
            ......ffffff44ff111ff7711fffff..........
            .......ff4444ff111f77777777111f.........
            ......f44444fff11f771777777111f.........
            .......fffffff11f7711777777711f.........
            ............ff11f7777771117777f.........
            ...........f4f11f7777771117777f.........
            ...........f44f11ff777771177771f........
            ...........f17f1111f777777777711f.......
            .....fff...f777f111ff7777777777f........
            ....f144fff4f717f111f7117777777f........
            .....f4444444f77f111f7717711177f........
            .....f4444444f777f11ff7777111771f.......
            ....f444444444f17f111f777771177f........
            ...f1444444444f77f111ff77777777f........
            ....ff4444444ffffff111ff777777f.........
            .....f1444ffff..f4f11111ff777f..........
            ......ffff....ff444f111111fff1f.........
            ..............f44444f111111111ff........
            ..............f444444ff111111ff1f.......
            ..............f44444444fffffff11ff......
            ..............ff444444ff444444fff1f.....
            ............ff44444444fff44444444ff.....
            ...........f44444444444f.fff4444444f....
            ..........f444444444444f....fffffff.....
            ...........ffffffffffff.................
            `, SpriteKind.bowser)
        tiles.placeOnTile(bowser, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        bowser.y += 3
        bowser.ay = 300
        bouseux = "vivant"
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fesprit, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    mario.startEffect(effects.fire, 5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bdf, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    mario.startEffect(effects.fire, 5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.trucnoir, function (sprite, otherSprite) {
    otherSprite.destroy()
    bouh = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ......ffffff........
        ....ff111111ff......
        ...f11111111bbf.....
        ..f11111111111bf....
        ..f1f1f1111111bf....
        .f11f1f11111ff1bf...
        .f111111111f11fbf...
        .f121212111111fbf...
        .f12222211111f11bf..
        .f12222221111111bf..
        ..f121212111111bbf..
        ..f111111111bbbbf...
        ...f111111bbbfff....
        ....fffbbbbff.......
        .......ffff.........
        ....................
        `, SpriteKind.bouh)
    bouh.setPosition(mario.x + 60, mario.y - 60)
    bouh.follow(mario, 35)
    bouh.say("Bouahahahaha", 1500)
    nombrebouh += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile30`, function (sprite, location) {
    info.changeScoreBy(10)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bowser, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
function startbonus1 () {
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile53`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . f 5 5 5 f f f 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . f 5 5 5 f f f 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 f f f 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 f f 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 f f 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 f f f 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bouh, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.blizzard, 200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile29`, function (sprite, location) {
    info.changeScoreBy(5)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
function startlvl () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddffffffffffffffffffffffdd66f6666f6ddfffffffffffffffffffffdddddddddffffffffffffffffffffffff
        ffffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffdd6f66666f6ddfffffffffffffffffffd6666f6666f666dffffffffffffffffffdd66f6666f6ddffffffffffffffffffffff
        ffffffffffffffffffffffffffdd66f666f66ddffffffffffffffffffffd666f66666f666dfffffffffffffffffdf6666f6666f6666dffffffffffffffffd6666f6666f666dfffffffffffffffffffff
        fffffffffffffffffffffffffd6666f666f6666dffffffffffffffffffdf666f66666f666fdfffffffffffffffd66f666f6666f666f6dffffffffffffffdf6666f6666f6666dffffffffffffffffffff
        ffffffffffffffffffffffffdf666ddddddd666fdffffffffffffffffd66f66ddddddd66f66dffffffffffffffd666f6ddddddd66f66dfffffffffffffd66f666f6666f6666fdfffffffffffffffffff
        fffffffffffffffffffffffd66fddcccccccddf66dfffffffffffffffd666ddcccccccdd666dfffffffffffffd6666ddcccccccdd6666dffffffffffffd666f6ddddddd666f6dfffffffffffffffffff
        fffffffffffffffffffffffd66dcccccccccccd66dffff6f6f6f6f6fd666dcccccccccccd666dffffffffffffd666dcccccccccccd666dfffffffffffd6666ddcccccccddf666dffffffffffffffffff
        ffffffffffffffffffffffd666dcccccccccccd666dff6f6f6f6f6ffd666dcccccccccccd666dffffffffffffd666dcccccccccccd666dfffffffffffd666dcccccccccccd666dffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccdffdff6ffffffffffdffdcccccccccccccdffdffffffffffffdffdcccccccccccccdffdfffffffffffd666dcccccccccccd666dffffffffffffffffff
        ffffffffffffffffffffffdffdcccccccccccccd66dff6ffffffffffd66dcccccccccccccd66dffffffffffffd66dcccccccccccccd66dfffffffffffdffdcccccccccccccdffdffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dff6ffffffffffd66dcccccccccccccd66dffffffffffffd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dffff6f6f6f6fd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dfff6f6f6f6ffd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dfffff6f6f6f6f6ffff
        ffffffffffffffffffffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dfff6ffffffffd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dffff6f6f6f6f6fffff
        ffffffffffffffffffffffd66dcccccccccccccdffdfffffffffffffdffdcccccccccccccdffdfff6ffffffffdffdcccccccccccccdffdfffffffffffd66dcccccccccccccd66dffff6fffffffffffff
        ffffffffffffffffffffffdffdcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dfff6ffffffffd66dcccccccccccccd66dfffffffffffdffdcccccccccccccdffdffff6fffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dffffffffffffd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dffff6fffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dffffffffffffd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dffffffffffffffffff
        f6f6f6ff6f6f6f6f6fffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dffffffffffffd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dffffffffff6f6f6f6f
        6f6f6ff6f6f6f6f6ffffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dffffffffffffd66dcccccccccccccd66dfffffffffffd66dcccccccccccccd66dfffffffff6f6f6f6ff
        fffffff6ffffffffffffffdffdcccccccccccccdffdffffff5ffffffdffdcccccccccccccdffdffffff5fffffdffdcccccccccccccdffdfffffffffffd66dcccccccccccccd66dfffffffff6ffffffff
        fffffff6ffffffffffffffd66dcccccccccccccd66dfffff545fffffd66dcccccccccccccd66dfffff545ffffd66dcccccccccccccd66dfffff5fffffdffdcccccccccccccdffdfffffffff6ffffffff
        fffffff6ffffffffffffffd66dcccccccccccccd66dfffff545fffffd66dcccccccccccccd66dfffff545ffffd66dcccccccccccccd66dffff545ffffd66dcccccccccccccd66dfffffffff6ffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dffff54245ffffd66dcccccccccccccd66dffff54245fffd66dcccccccccccccd66dffff545ffffd66dcccccccccccccd66dffffffffffffffffff
        ff6f6f6f6f6ff6f6f6f6f6d66dcccccccccccccd66dfff5422245fffd66dcccccccccccccd66dfff5422245ffd66dcccccccccccccd66dfff54245fffd66dcccccccccccccd66dffffffffffffffffff
        f6f6f6f6f6ff6f6f6f6f6fdffdcccccccccccccdffdfff5422245fffdffdcccccccccccccdffdfff5422245ffdffdcccccccccccccdffdff5422245ffd66dcccccccccccccd66dffffffffffffffffff
        f6ffffffffff6fffffffffd66dcccccccccccccd66dffff54245ffffd66dcccccccccccccd66dffff54245fffd66dcccccccccccccd66dff5422245ffdffdcccccccccccccd66dffffffffffffffffff
        f6ffffffffff6fffffffffd66dcccccccccccccd66dfffff545fffffd66dcccccccccccccd66dfffff545ffffd66dcccccccccccccd66dfff54245fffd66dcccccccccccccdffdffffffffffffffffff
        f6ffffffffff6fffffffffd66dcccccccccccccd66dfff4444444fffd66dcccccccccccccd66dfff4444444ffd66dcccccccccccccd66dffff545ffffd66dcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dffeeeeeeeeeffd66dcccccccccccccd66dffeeeeeeeeefd66dcccccccccccccd66dff4444444ffd66dcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffdffdcccccccccccccdffdfffeeeeeeefffdffdcccccccccccccdffdfffeeeeeeeffdffdcccccccccccccd66dfeeeeeeeeefd66dcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dffffeeeeeffffd66dcccccccccccccd66dffffeeeeefffd66dcccccccccccccdffdffeeeeeeeffdffdcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dfffffeeefffffd66dcccccccccccccd66dfffffeeeffffd66dcccccccccccccd66dfffeeeeefffd66dcccccccccccccdffdffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dffffffeffffffd66dcccccccccccccd66dffffffefffffd66dcccccccccccccd66dffffeeeffffd66dcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffd66dcccccccccccccd66dfffffffffffffd66dcccccccccccccd66dffffffffffffd66dcccccccccccccd66dfffffefffffd66dcccccccccccccd66dffffffffffffffffff
        ffffffffffffffffffffffdddddddddddddddddddddfffffffffffffdddddddddddddddddddddffffffffffffdddddddddddddddddddddfffffffffffdddddddddddddddddddddffffffffffffffffff
        ffffffffffffffffffffffddddddddddddddd666f6dfffffffffffffdddddddddddddddd66f6dffffffffffffddddddddddddddd66f66dfffffffffffdddddddddddddddd666fdffffffffffffffffff
        ffffffffffffffffffffffdd66f6666f6666f666f6dfff6f6f6f6f6fdd66f6666f6666f666f6dffffffffffffdd66f666f666f6666f66dfffffffffffdd666f6666f6666f666fdffffffffffffffffff
        ffffffffffffffffffffffdd66f6666f6666f666f6dff6f6f6f6f6ffdd66f6666f6666f666f6dffffffffffffdd66f666f666f6666f66dfffffffffffdd666f6666f6666f666fdffffffffffffffffff
        ffffffffffffffffffffffdddddddddddddddddddddff6ffffffffffdddddddddddddddddddddffffffffffffdddddddddddddddddddddfffffffffffdddddddddddddddddddddffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6fffffffffffff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6fffffffffffff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffff6fffffffff6f6f6f6f6fff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffff6ffffffff6f6f6f6f6fff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff6ffffffffff6fffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff6f6f6f6f6fff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff6f6f6f6f6fff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff6fffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6fff6f6f6f6f6ff6f6f6f6f6fffffffffff
        fffffffffffffffffffffffff6fffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6fff6f6f6f6f6ff6f6f6f6f6ffffffffffff
        fffffffffffffffffffffffff6fffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff6ffffffffff6ffffffffffffffffffff
        fffffffffffffffffffffffff6fffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff6ffffffffff6ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffff6ffffffffff6ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6ffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6ff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6ff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ffffffffffffffffffffffffffffff
        fff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffff6f6f6f6f6fffffffffffffffffffffffffffffffffffffffffffffff6f6f6f6f6ff6f6f6f6f6ffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        fffffffff6f6f6f6f6ffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        fffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    if (currentlvl == 0) {
        tiles.setTilemap(tilemap`level6`)
    } else if (currentlvl == 1) {
        tiles.setTilemap(tilemap`level7`)
    } else if (currentlvl == 2) {
        tiles.setTilemap(tilemap`level8`)
    } else {
        game.over(true, effects.confetti)
    }
    if (spawn == "lvl") {
        tiles.placeOnRandomTile(mario, assets.tile`tile1`)
    } else if (spawn == "bonus1") {
        tiles.placeOnRandomTile(mario, assets.tile`tile59`)
    } else if (spawn == "bonus2") {
        tiles.placeOnRandomTile(mario, assets.tile`tile35`)
    }
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile59`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile35`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile67`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`tile7`)) {
        esprit_de_feu = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 2 4 2 2 f . . . . . 
            . . . . f 2 f 2 2 f 5 f . . . . 
            . . . f 4 2 f 2 2 f 2 4 f . . . 
            . . . f 2 2 f 2 2 f 2 2 f . . . 
            . . . f 5 2 2 2 5 2 2 2 f . . . 
            . . . . f 2 4 2 2 4 2 f . . . . 
            . . . . . f 2 f f 2 f . . . . . 
            . . . . . f 5 f . f f . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.fesprit)
        tiles.placeOnTile(esprit_de_feu, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runMovementAnimation(
        esprit_de_feu,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        esprit_de_feu.startEffect(effects.fire)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile9`)) {
        truc_noir = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.trucnoir)
        tiles.placeOnTile(truc_noir, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile15`)) {
        fleur = sprites.create(img`
            .........................
            .........................
            .........................
            ..ff.................ff..
            .f11f...............f11f.
            .f111f.............f111f.
            ..f111f...........f111f..
            .f2f111f.........f111f2f.
            .f22f111f.......f111f22f.
            .f112f111f.....f111f211f.
            .f1122f111f...f111f2211f.
            ..f2222f111fff111f2222f..
            ..f22222f1111111f21122f..
            ...f11222fffffff22112f...
            ...f11222112222222222f...
            ....f222211222211222f....
            .....f2222222221122f.....
            ..ff..ff222211222ff..ff..
            .f77f...fff211fff...f77f.
            f7777fff..f777f..fff7777f
            f7777777f.f777f.f7777777f
            .f7777777ff777ff7777777f.
            ..ff77777777777777777ff..
            ....fffffffffffffffff....
            .........................
            `, SpriteKind.fleur)
        tiles.placeOnTile(fleur, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile53`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . f 5 5 5 f f f 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . f 5 5 5 f f f 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 f f f 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 f f 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 f 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 f f 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . f 5 5 f 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 f f f 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . f 5 5 f 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`tile8`)) {
        gumpa = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f f f f e e f f f f . . . 
            . . . . f 1 f e e f 1 f . . . . 
            . . . f e 1 1 f f 1 1 e f . . . 
            . f f e e 1 f e e f 1 e e f f . 
            f e e e e 1 f e e f 1 e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e 1 f f f f f f f f 1 e e f 
            . f e 1 e e e e e e e e 1 e f . 
            . . f f f f f f f f f f f f . . 
            . . . f e 1 1 1 1 1 1 f . . . . 
            . f f f f e 1 1 1 1 1 1 f f f . 
            f f f f f f e e e e e f f f f f 
            f f f f f f f . . . f f f f f f 
            `, SpriteKind.gumpa)
        tiles.placeOnTile(gumpa, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
}
scene.onOverlapTile(SpriteKind.bowser, assets.tile`tile66`, function (sprite, location) {
    pause(1000)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gumpa, function (sprite, otherSprite) {
    if (mario.y < otherSprite.y - 5) {
        mario.vy = -150
        otherSprite.destroy()
        music.pewPew.play()
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fleur, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1500)
})
let bdf: Sprite = null
let gumpa: Sprite = null
let fleur: Sprite = null
let truc_noir: Sprite = null
let esprit_de_feu: Sprite = null
let bouh: Sprite = null
let bouseux = ""
let bowser: Sprite = null
let champi_1up: Sprite = null
let coin: Sprite = null
let mario: Sprite = null
let spawn = ""
let currentlvl = 0
info.setLife(30)
info.setScore(0)
let nombrebouh = 0
currentlvl = 0
spawn = "lvl"
mario = sprites.create(img`
    ....................
    ....................
    ....................
    .....2222222........
    ....2222222222......
    ....eeedddfd........
    ...ededdddfddd......
    ...edeeddddfddd.....
    ...eedddddffff......
    .....dddddddd.......
    ....22822822........
    ...2228228222.......
    ..222288882222......
    ..112858858211......
    ..111888888111......
    ..118888888811......
    ....888..888........
    ...eee....eee.......
    ..eeee....eeee......
    ....................
    `, SpriteKind.Player)
mario.ay = 350
controller.moveSprite(mario, 100, 0)
startlvl()
game.onUpdate(function () {
    mario.setImage(img`
        ....................
        ....................
        ....................
        .....2222222........
        ....2222222222......
        ....eeedddfd........
        ...ededdddfddd......
        ...edeeddddfddd.....
        ...eedddddffff......
        .....dddddddd.......
        ....22822822........
        ...2228228222.......
        ..222288882222......
        ..112858858211......
        ..111888888111......
        ..118888888811......
        ....888..888........
        ...eee....eee.......
        ..eeee....eeee......
        ....................
        `)
    if (mario.vy < 0) {
        mario.setImage(img`
            ....................
            ....................
            ....................
            .......2222222.111..
            ......222222222211..
            ......eeedddfd.222..
            .....ededdddfddd22..
            .....edeeddddfddd2..
            .....eedddddffff2...
            .......dddddddd22...
            .111222282222822..e.
            .11122222822228..ee.
            ..1..222288888588ee.
            ......88885888888ee.
            ....ee88888888888ee.
            ...eee8888888.......
            ...ee...............
            ....................
            ....................
            ....................
            `)
    }
    if (mario.vx < 0) {
        mario.image.flipX()
        mario.setImage(mario.image)
    }
})
game.onUpdate(function () {
    if (nombrebouh > 0) {
        bouh.setImage(img`
            ....................
            ....................
            ....................
            ....................
            ......ffffff........
            ....ff111111ff......
            ...f11111111bbf.....
            ..f11111111111bf....
            ..f1f1f1111111bf....
            .f11f1f11111ff1bf...
            .f111111111f11fbf...
            .f121212111111fbf...
            .f12222211111f11bf..
            .f12222221111111bf..
            ..f121212111111bbf..
            ..f111111111bbbbf...
            ...f111111bbbfff....
            ....fffbbbbff.......
            .......ffff.........
            ....................
            `)
        if (bouh.vx > 0) {
            bouh.image.flipX()
            bouh.setImage(bouh.image)
        }
    }
})
forever(function () {
    if (bouseux == "vivant") {
        pause(3500)
        bdf = sprites.create(img`
            ......4444...44......
            ....4455554445544.44.
            ...455544555555554554
            ..455444444555445554.
            .45544222244554.444..
            .4544222222445444....
            4554222222224555544..
            45442222222244555554.
            4544222222224455554.4
            455422222222455544.4.
            .454422222244544.....
            .45544222244554.444..
            ..455444444555445554.
            ...455544555555554554
            ....4455554445544.44.
            ......4444...44......
            `, SpriteKind.bdf)
        bdf.setPosition(bowser.x, bowser.y)
        bdf.vx = -100
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, assets.tile`tile38`) && controller.up.isPressed()) {
        spawn = "lvl"
        startbowser()
    }
})
forever(function () {
    if (bouseux == "vivant") {
        bowser.vy = -150
        pause(6000)
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Bottom, assets.tile`tile25`) && controller.down.isPressed()) {
        startbonus1()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Bottom, assets.tile`tile56`)) {
        mario.vy = -300
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Right, assets.tile`tile50`) && controller.right.isPressed()) {
        startbonus2()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Left, assets.tile`tile57`) && controller.left.isPressed()) {
        spawn = "bonus1"
        startlvl()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, assets.tile`tile48`) && controller.up.isPressed()) {
        spawn = "bonus2"
        startlvl()
    }
})
