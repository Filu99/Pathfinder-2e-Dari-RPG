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
    .file("DKDatabase.Ranged.Sling.sling_throw")
    .delay(1020)

    .effect()
    .waitUntilFinished(-200)
    .file("jb2a.throwable.throw.flask.02.blue")
    .atLocation(myToken)
    .stretchTo(impactPoint)

    .effect()
    .playIf(isHit == 2 || isHit == 3)
    .file("jb2a.impact.011.blue02")
    .atLocation(impactPoint)
    .scale(1)

    .effect()
    .playIf(isHit == 0 || isHit == 1)
    .file("jb2a.impact.007.blue")
    .atLocation(impactPoint)
    .scale(0.3)

    .effect()
    .file("jb2a.explosion.side_fracture.flask.02")
    .atLocation(impactPoint)
    .attachTo(impactPoint)
    .rotateTowards(myToken)
    .rotate(180)
    .scale(1)

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
    .file("DKDatabase.Misc.FlaskEffects.flask_zap")
    .playIf(isHit == 2 || isHit == 3)

    .sound()
    .file("DKDatabase.Misc.FlaskEffects.flask_smash")

    .play()