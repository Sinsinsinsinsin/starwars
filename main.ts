controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b 8 8 b . . . . . . 
        . . . b b b 8 8 9 9 b b b . . . 
        . . . b 8 8 8 8 9 9 8 8 b . . . 
        . . . . b d 8 8 8 8 d b . . . . 
        . . . . c 8 8 8 8 8 8 c . . . . 
        . . . . c 8 8 d d 8 8 c . . . . 
        . . . . c 8 d c c d 8 c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`plane`, SpriteKind.Player)
scene.setBackgroundColor(15)
effects.blizzard.startScreenEffect()
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        ....ffffff.........fff........
        ....ff77fff.......ff7f....44..
        .....fffffffff...ff77f...44...
        ....ff77777777ffff777f.442....
        ...f777777777777ff777f422.....
        ..f77777777777777777f2244444..
        .f79777777777777777f722222222.
        f7799777777777fffffff77f444444
        f777997777777f777fffffff444444
        .f7777777777777777f..44444422.
        ..ff7777777ff777777f.44242244.
        ....ffffffffff777777f.4..4444.
        ............fffc7777f..44....4
        .............ffffffff....44...
        ..............................
        ..............................
        `, SpriteKind.Enemy)
    mySprite2.x = scene.screenWidth()
    mySprite2.y = randint(10, scene.screenHeight() - 10)
    mySprite2.vx = -40
})
