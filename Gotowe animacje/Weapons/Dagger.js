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


if(isMelee){
    new Sequence()

        .sound()
        .file("DKDatabase.Mele.Dagger.dagger_whoosh")

        .effect()
        .file("jb2a.dagger.melee.02.white")
        .atLocation(myToken)
        .stretchTo(impactPoint)
        .wait(700)

        .effect()
        .playIf(isHit == 2 || isHit == 3)
        .file("jb2a.liquid.splash_side02.red")
        .attachTo(impactPoint)
        .scale(0.5)
        .rotateTowards(myToken)
        .rotate(180)

        .sound()
        .playIf(isHit == 2 || isHit == 3)
        .file("DKDatabase.Mele.Dagger.dagger_hit")


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
}
else {
    new Sequence()



    .effect()
    .file("jb2a.dagger.throw.01.white")
    .atLocation(myToken)
    .stretchTo(impactPoint)
    .wait(180)

    .sound()
    .playIf(isHit == 2 || isHit == 3)
    .file("DKDatabase.Ranged.Dagger.dagger_hit")
    .startTime(1000)

    .sound()
    .playIf(isHit == 0 || isHit == 1)
    .file("DKDatabase.Ranged.Dagger.dagger_miss")
    .startTime(1000)

    .wait(550)

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
}