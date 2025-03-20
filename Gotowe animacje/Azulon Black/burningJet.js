let position = await Sequencer.Crosshair.show({
    size: 1,
    gridHighlight: false,
    label: {
        text: "Tutaj zapierdalasz",
    }
}, { show: async (crosshair) => {

    new Sequence()
        .effect()
            .waitUntilFinished()
            .from(token)
            .attachTo(crosshair)
            .persist()
            .opacity(0.5)
        .play();

}})

if(!position){
    return;
}

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
        .file("DKDatabase.Abilities.AzulonBlack.elementalBlast")
        .startTime(800)
    .effect()
        .from(token)
        .fadeIn(50)
        .duration(400)
        .fadeOut(250)
        .filter("Blur")
        .elevation(0)

    .effect()
        .file("animated-spell-effects-cartoon.fire.23")
        .scale(1)
        .belowTokens(true)
        .stretchTo(position)
        .atLocation(token)
        .elevation(0)

    .wait(200)
    .animation()
        .on(token)
        .teleportTo(position)
        .snapToGrid()
    .effect()
        .file("animated-spell-effects-cartoon.fire.13")
        .atLocation(position)
        .belowTokens()
        .attachTo(token, {align: "top"})
        .scale(0.50)
    .play();