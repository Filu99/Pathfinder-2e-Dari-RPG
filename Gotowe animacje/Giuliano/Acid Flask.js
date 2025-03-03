let targetToken = Array.from(game.user.targets) [0];
let myToken = sourceToken;
let impactPoint = targetToken.center;
let lastMessage = game.messages.contents[game.messages.contents.length - 1];
let isHit = lastMessage.rolls[0].degreeOfSuccess;


//Testowe pisanko sprawdzanko integracji
if (isHit == 0 || isHit == 1){
    if( Math.floor(Math.random() * 10) < 5){impactPoint.x += 60}
    else{impactPoint.x -= 60}
    if(Math.floor(Math.random() * 10) < 5){impactPoint.y += 60}
    else{impactPoint.y -= 60}
}

let splashScale = 0;

if(isHit == 0 || isHit == 1)
    splashScale = 0.2;
if(isHit == 2 || isHit == 3)
    splashScale = 0.7;

new Sequence()

    .sound()
    .file("DKDatabase.Ranged.Sling.sling_throw")
    .delay(1020)

    .effect()
    .waitUntilFinished(-200)
    .file("jb2a.throwable.throw.flask.03.green")
    .atLocation(myToken)
    .stretchTo(impactPoint)

    .effect()
    .file("jb2a.liquid.splash02.green")
    .atLocation(impactPoint)
    .scale(splashScale)

    .effect()
    .file("jb2a.explosion.side_fracture.flask.03")
    .atLocation(impactPoint)
    .attachTo(impactPoint)
    .rotateTowards(myToken)
    .rotate(180)
    .scale(1)

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
    .file("DKDatabase.Misc.FlaskEffects.flask_spill")

    .sound()
    .file("DKDatabase.Misc.FlaskEffects.flask_smash")

    .play()


