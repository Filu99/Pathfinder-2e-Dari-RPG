let targetToken = Array.from(game.user.targets) [0];
let myToken = token;

let spriteScale = 0.15
let trangleAnimation = "jb2a.template_circle.radar.loop.ping.001.300px.triangle.orangeyellow"

new Sequence()

    .sound()
    .file("DKDatabase.Abilities.StanleyKowalski.final_shot")

    .effect()
    .delay(1252)
    .file(trangleAnimation)
    .atLocation(myToken)
    .spriteOffset({ x: -30, y: -60 })
    .scale(spriteScale)

    .effect()
    .delay(1783)
    .fadeOut(2000, {delay: -631})
    .file(trangleAnimation)
    .atLocation(myToken)
    .spriteOffset({ x: 0, y: -60 })
    .scale(spriteScale)

    .effect()
    .delay(2319)
    .fadeOut(2000, {delay: -1167})
    .file(trangleAnimation)
    .atLocation(myToken)
    .spriteOffset({ x: 30, y: -60 })
    .scale(spriteScale)

    .effect()
    .delay(2800)
    .file("blfx.spell.cast.circles2.energy1.smoke.orange")
    .atLocation(myToken)
    .belowTokens()
    .scale(0.15)


    .play()