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
    .waitUntilFinished(-1000)
    .file("jb2a.melee_attack.01.sickle")
    .atLocation(myToken)
    .stretchTo(impactPoint)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.impact.007.red")
    .attachTo(impactPoint)
    .scale(0.6)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .attachTo(impactPoint)
    .file("jb2a.impact.007.white")
    .scale(0.6)

    .effect()
    .playIf(isHit == 3)
    .attachTo(impactPoint)
    .file("jb2a.ui.critical.red")
    .scale(1)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .attachTo(impactPoint)
    .file("jb2a.ui.miss.white")
    .scale(2)

    .sound()
    .playIf(isHit == 2 || isHit == 3)
    .file("DKDatabase.Mele.Sickle.sickle_hit")

    .sound()
    .playIf(isHit == 0 || isHit == 1)
    .file("DKDatabase.Mele.Sickle.sickle_miss")

    .play()
