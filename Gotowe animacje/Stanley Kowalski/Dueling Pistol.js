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
    .file("DKDatabase.Firearms.DuelingPistol.dueling_pistol_shots")

    .effect()
    .file("jb2a.smoke.puff.side.grey")
    .scale(0.5)
    .atLocation(myToken)
    .rotateTowards(impactPoint)

    .effect()
    .waitUntilFinished(-1100)
    .file("jb2a.bullet.Snipe.orange")
    .atLocation(myToken)
    .stretchTo(impactPoint)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.liquid.splash_side02.red")
    .attachTo(impactPoint)
    .scale(0.5)
    .rotateTowards(myToken)
    .rotate(180)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .file("jb2a.ui.miss.white")
    .atLocation(impactPoint)
    .scale(2)

    .effect()
    .playIf(isHit == 3)
    .attachTo(impactPoint)
    .file("jb2a.ui.critical.red")
    .scale(1)

    .sound()
    .playIf(isHit == 0 || isHit == 1)
    .file("DKDatabase.Firearms.Ricochets.ricochet_sounds")

    .play()