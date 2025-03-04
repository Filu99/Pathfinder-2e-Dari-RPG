let targetToken = Array.from(game.user.targets) [0];
let myToken = token;

new Sequence()

    .sound()
    .file("DKDatabase.Misc.CalledShot.sonar_sound")

    .effect()
    .waitUntilFinished()
    .file("jb2a.ui.indicator.redyellow.02.03")
    .atLocation(targetToken)
    .spriteOffset({ x: 30, y: -20 })
    .scale(0.2)

    .effect()
    .waitUntilFinished()
    .file("jb2a.ui.indicator.redyellow.02.03")
    .atLocation(targetToken)
    .spriteOffset({ x: -15, y: -10 })
    .scale(0.2)

    .effect()
    .file("jb2a.ui.indicator.redyellow.02.03")
    .atLocation(targetToken)
    .spriteOffset({ x: 0, y: 20 })
    .scale(0.2)

    .play()