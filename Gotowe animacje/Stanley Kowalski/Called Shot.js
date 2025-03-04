let targetToken = Array.from(game.user.targets) [0];
let myToken = token;

let sonarSound = "DKDatabase.Abilities.StanleyKowalski.called_shot"

new Sequence()

    .sound()
    .file(sonarSound)

    .effect()
    .waitUntilFinished()
    .file("jb2a.ui.indicator.redyellow.02.03")
    .atLocation(targetToken)
    .spriteOffset({ x: 30, y: -20 })
    .scale(0.2)

    .sound()
    .file(sonarSound)

    .effect()
    .waitUntilFinished()
    .file("jb2a.ui.indicator.redyellow.02.03")
    .atLocation(targetToken)
    .spriteOffset({ x: -15, y: -10 })
    .scale(0.2)

    .sound()
    .file(sonarSound)

    .effect()
    .file("jb2a.ui.indicator.redyellow.02.03")
    .atLocation(targetToken)
    .spriteOffset({ x: 0, y: 20 })
    .scale(0.2)

    .play()