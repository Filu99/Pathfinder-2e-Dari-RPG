let targetToken = Array.from(game.user.targets) [0];
let myToken = token;

let cardAnimation = "jb2a.ranged.card.01.projectile.01"

new Sequence()

    .sound()
    .file("DKDatabase.Abilities.StanleyKowalski.fanes_escape")

    .sound()
    .delay(3700)
    .file("DKDatabase.Misc.Miscellaneous.smoke_puff")

    .effect()
    .delay(3800)
    .file("blfx.spell.cast.circles2.energy1.smoke.orange")
    .atLocation(myToken)
    .scale(0.2)

    .effect()
    .file(cardAnimation)
    .delay(3100)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3150)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3200)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3250)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3300)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3350)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3400)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3450)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3500)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3550)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .effect()
    .file(cardAnimation)
    .delay(3600)
    .atLocation(myToken)
    .randomSpriteRotation()
    .scale(0.5)

    .play()