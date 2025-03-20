let targetToken = Array.from(game.user.targets) [0];
let myToken = token;
let impactPoint = targetToken.center;
let lastMessage = game.messages.contents[game.messages.contents.length - 1];
let isHit = lastMessage.rolls[0].degreeOfSuccess;

if (isHit == 0 || isHit == 1){
    if( Math.floor(Math.random() * 10) < 5){impactPoint.x += 60}
    else{impactPoint.x -= 60}
    if(Math.floor(Math.random() * 10) < 5){impactPoint.y += 60}
    else{impactPoint.y -= 60}
}

new Sequence()

    .effect()
    .file("jb2a.claws.400px.dark_red")
    .zIndex(105)
    .atLocation(impactPoint)
    .scale(0.5)
    .delay(100)

    .effect()
    .playIf(isHit == 3)
    .attachTo(impactPoint)
    .file("jb2a.ui.critical.red")
    .scale(1)
    .delay(200)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.impact.007.red")
    .attachTo(impactPoint)
    .scale(0.6)
    .delay(270)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.liquid.splash_side02.red")
    .zIndex(90)
    .delay(270)
    .atLocation(impactPoint)
    .attachTo(impactPoint)
    .rotate(225)
    .scale(0.6)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.liquid.splash_side02.red")
    .zIndex(90)
    .delay(470)
    .atLocation(impactPoint)
    .attachTo(impactPoint)
    .rotate(-45)
    .scale(0.6)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .attachTo(impactPoint)
    .file("jb2a.ui.miss.white")
    .scale(2)
    .delay(200)

    .effect()
    .zIndex(90)
    .playIf(isHit == 0 || isHit == 1)
    .attachTo(impactPoint)
    .file("jb2a.impact.007.white")
    .scale(0.5)
    .delay(200)

    .sound()
    .playIf(isHit == 2 || isHit == 3)
    .file("DKDatabase.Mele.ClawsAttack.claws_hit")

    .sound()
    .playIf(isHit == 0 || isHit == 1)
    .file("DKDatabase.Mele.ClawsAttack.claws_miss")

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .zIndex(100)
    .delay(200)
    .copySprite(targetToken)
    .zIndex(0)
    .loopProperty('sprite', 'position.x', {
        from: -0.02,
        to: 0.02,
        duration: 50,
        pingPong: true,
        delay: 0,
        gridUnits: true,
    })
    .loopProperty('sprite', 'position.y', {
        from: -0.02,
        to: 0.02,
        duration: 10,
        pingPong: true,
        delay: 0,
        gridUnits: true,
    })

    .play()
