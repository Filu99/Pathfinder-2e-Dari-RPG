let targetToken = Array.from(game.user.targets) [0];
let myToken = token;
let impactPoint = targetToken.center;
let lastMessage = game.messages.contents[game.messages.contents.length - 1];
let isHit = lastMessage.rolls[0].degreeOfSuccess;
let isMelee = lastMessage.flags.pf2e.context.identifier.includes("melee");

if (isHit == 0 || isHit == 1){
    if( Math.floor(Math.random() * 10) < 5){impactPoint.x += 60}
    else{impactPoint.x -= 60}
    if(Math.floor(Math.random() * 10) < 5){impactPoint.y += 60}
    else{impactPoint.y -= 60}
}

    new Sequence()

        .sound()
        .file("DKDatabase.Ranged.Bow.bow_load")
        .startTime(1000)

        .effect()
        .file("blfx.weapon.range.bow3.attack1.color1")
        .atLocation(myToken)
        .rotateTowards(impactPoint)
        .scaleToObject(1.5)
        .waitUntilFinished(-1200)

        .sound()
        .playIf(isHit == 2 || isHit == 3)
        .file("DKDatabase.Ranged.Bow.bow_hit")

        .sound()
        .playIf(isHit == 0 || isHit == 1)
        .file("DKDatabase.Ranged.Bow.bow_miss")
        .startTime(700)

        .effect()
        .file("jb2a.arrow.physical.white.01")
        .atLocation(myToken)
        .stretchTo(impactPoint)
        .waitUntilFinished(-1300)

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


        .play()
