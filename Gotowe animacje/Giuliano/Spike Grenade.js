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

    .sound()
    .file("DKDatabase.Ranged.Sling.sling_throw")
    .delay(1020)

    .effect()
    .waitUntilFinished(-200)
    .file("jb2a.throwable.throw.bomb.01.black")
    .atLocation(myToken)
    .stretchTo(impactPoint)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.impact.fire.01.orange")
    .atLocation(impactPoint)
    .scale(0.3)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.explosion.shrapnel.grenade.03.black")
    .atLocation(impactPoint)
    .scale(0.4)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .file("jb2a.impact.fire.01.orange")
    .atLocation(impactPoint)
    .scale(0.3)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .attachTo(impactPoint)
    .file("jb2a.ui.miss.white")
    .scale(2)

    .effect()
    .playIf(isHit == 3)
    .attachTo(impactPoint)
    .file("jb2a.ui.critical.red")
    .scale(1)

    .sound()
    .file("DKDatabase.Misc.SpikeGrenade.spike_grenade")

    .play()