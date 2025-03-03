let myToken = token;

new Sequence()

    .sound()
    .file("DKDatabase.Misc.Miscellaneous.torch")

    .effect()
    .file("blfx.spell.melee.breath1.fire1.attack1.orange")
    .atLocation(myToken)
    .spriteRotation(-90)
    .spriteOffset({ x: 50, y: -60 })
    .scale(0.05)
    .delay(200)

    .effect()
    .file("jb2a.smoke.puff.side.grey")
    .atLocation(myToken)
    .spriteRotation(-90)
    .spriteOffset({ x: 50, y: -70 })
    .scale(0.2)
    .delay(600)

    .effect()
    .file("jb2a.flames.04.complete.orange")
    .atLocation(myToken)
    .spriteOffset({ x: 50, y: -110 })
    .scale(0.3)
    .delay(1600)
    .fadeOut(3000, {delay: -3000})

    .play()