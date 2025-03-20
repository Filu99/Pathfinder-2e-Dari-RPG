new Sequence()
    .sound()
    .file("DKDatabase.Abilities.AzulonBlack.ignition")
    .endTime(3650)
    .fadeOutAudio(500)

    .effect()
    .file("animated-spell-effects-cartoon.fire.19")
    .belowTokens()
    .atLocation(token)
    .scale(0.35)
    .waitUntilFinished()

    .sound()
    .file("DKDatabase.Abilities.AzulonBlack.persistentFire")
    .fadeInAudio(500)
    .duration(5000)
    .fadeOutAudio(500)
    .crosshair("position")
    .type("circle")
    .icon(this.img)
    .distance(2.5)
    .snapPosition(0)
    .callback("mouseMove", function(crosshair) {

new Sequence()
    .effect()
    .file("jb2a.flames.01.orange")
    .atLocation({x:crosshair.document.x, y:crosshair.document.y})
    .scale(1)
    .duration(500)
    .fadeOut(500)
    .randomRotation()

.play()

})

.play();