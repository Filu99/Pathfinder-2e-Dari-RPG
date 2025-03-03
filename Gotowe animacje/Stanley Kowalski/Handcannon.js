let targetToken = Array.from(game.user.targets) [0];
let myToken = sourceToken;
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

    .sound()
    .file("DKDatabase.Firearms.Handcannon.handcannon_shots")

    .effect()
    .file("jb2a.smoke.puff.side.grey")
    .scale(0.5)
    .atLocation(myToken)
    .rotateTowards(impactPoint)

    .effect()
    .waitUntilFinished(-1500)
    .file("jb2a.ranged.01.instant.01.dark_orange")
    .atLocation(myToken)
    .stretchTo(impactPoint)
    .scale(2)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.liquid.splash02.red")
    .attachTo(impactPoint)
    .scale(0.7)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .file("jb2a.explosion.shrapnel.grenade.03.black")
    .atLocation(impactPoint)
    .scale(0.2)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .file("jb2a.ui.miss.white")
    .scale(2)
    .atLocation(impactPoint)

    .effect()
    .playIf(isHit == 3)
    .attachTo(impactPoint)
    .file("jb2a.ui.critical.red")
    .scale(1)

    .effect()
    .playIf(!isHit)
    .file("jb2a.explosion.shrapnel.bomb.01.grey")
    .scale(0.5)
    .atLocation(impactPoint)

    .sound()
    .playIf(isHit == 0 || isHit == 1)
    .file("DKDatabase.Firearms.Ricochets.ricochet_sounds")

    .effect()
    .playIf(isHit == 2 || isHit == 3)
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