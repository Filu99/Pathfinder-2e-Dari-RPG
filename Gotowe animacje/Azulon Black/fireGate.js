const AURA_NAME = "kinetic-aura"; // Name of aura

let selectedTokens = canvas.tokens.controlled;
if (!selectedTokens || selectedTokens.length === 0) {
    ui.notifications.warn("Nie wybrano żadnego tokena!");
    return;
}
const token = selectedTokens[0]; 
if (!token) {
    ui.notifications.warn("Błąd: Token nie został poprawnie załadowany.");
    return;
}

const actor = token.actor;
if (!actor) {
    ui.notifications.warn("Błąd: Token nie ma przypisanego aktora.");
    return;
}

const auras = actor.auras || new Map(); // Upewniamy się, że `auras` istnieje
const hasAura = auras.has(AURA_NAME);

let effectRemoved = true; // Flaga sprawdzająca, czy efekt został już usunięty

if (!hasAura) {
    console.log(`Token ${token.name} nie ma aury "${AURA_NAME}". Wyczekiwanie.`);

    const interval1 = setInterval(() => {
        const updatedAuras = token.actor?.auras || new Map();
        const stillHasAura = updatedAuras.has(AURA_NAME);
        if (stillHasAura && effectRemoved) {
            console.log(`Aura ${AURA_NAME} pojawiła się aura, załączam animacje.`);

            new Sequence()

            .sound()
            .name("ChannelFire")
            .file("DKDatabase.Abilities.AzulonBlack.ignition")
            .volume(0.4)
            .waitUntilFinished(-4000)

            .effect()
            .name("ChannelFire")
            .file("animated-spell-effects-cartoon.fire.33")
            .attachTo(token, {offset:{x:0.1, y: -0.1}, gridUnits:true, followRotation: false})
            .scaleToObject(3.5)
            .fadeIn(250)
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .fadeOut(500)
            .belowTokens()
            .opacity(0.85)
            .waitUntilFinished(-800)
    
            .sound()
            .name("ChannelFire")
            .file("DKDatabase.Abilities.AzulonBlack.persistentFire")
            .volume(0.2)
            .duration(6000000)

            .effect()
            .name("ChannelFire")
            .file("animated-spell-effects-cartoon.fire.13")
            .attachTo(token, {offset:{x:0, y: -0.5}, gridUnits:true, followRotation: false})
            .scaleToObject(2.5)
            .fadeIn(250)
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .fadeOut(500)
            .belowTokens()
    
            .effect()
            .name("ChannelFire")
            .file("jb2a.wind_stream.200.white")
            .attachTo(token, {offset:{x:0, y: 0}, gridUnits:true, followRotation: false})
            .scaleToObject(2)
            .fadeIn(1000)
            .fadeOut(500)
            .persist()
            .playbackRate(0.8)
            .opacity(0.45)
            .filter("ColorMatrix", { saturate:1, brightness:2 })
            .rotate(90)
            .tint("#fd9608")
            .mask()
    
            .effect()
            .name("ChannelFire")
            .file("animated-spell-effects-cartoon.fire.27")
            .attachTo(token, {offset:{x:0.05*token.document.width, y: 0.35*token.document.width}, gridUnits:true, followRotation: false})
            .scaleToObject(1.1, {considerTokenScale: true})
            .rotate(-67)
            .persist()
            .filter("ColorMatrix", {saturate: -1, brightness: 0  })
            .filter("Blur", {blurX: 5, blurY:10 })
            .opacity(0.6)
    
            .effect()
            .name("ChannelFire")
            .file("animated-spell-effects-cartoon.fire.27")
            .attachTo(token, {offset:{x:0.05*token.document.width, y: 0.25*token.document.width}, gridUnits:true, followRotation: false})
            .scaleToObject(1.1, {considerTokenScale: true})
            .rotate(-67)
            .persist()
            .zIndex(0.1)
    
            //
            .effect()
            .name("ChannelFire")
            .delay(500)
            .file("animated-spell-effects-cartoon.fire.27")
            .attachTo(token, {offset:{x:-0.325*token.document.width, y: -0.15*token.document.width}, gridUnits:true, followRotation: false})
            .scaleToObject(0.9, {considerTokenScale: true})
            .belowTokens(false)
            .mirrorY(true)
            .rotate(145)
            .persist()
            .filter("ColorMatrix", {saturate: -1, brightness: 0  })
            .filter("Blur", {blurX: 5, blurY:10 })
            .opacity(0.6)
    
            .effect()
            .name("ChannelFire")
            .delay(500)
            .file("animated-spell-effects-cartoon.fire.27")
            .attachTo(token, {offset:{x:-0.325*token.document.width, y: -0.25*token.document.width}, gridUnits:true, followRotation: false})
            .scaleToObject(0.9, {considerTokenScale: true})
            .belowTokens(false)
            .mirrorY(true)
            .rotate(145)
            .persist()
            .zIndex(0.1)
            .waitUntilFinished()
            .play()

            effectRemoved = false; // Zmieniamy flagę na false, aby kolejny interwał działał
            clearInterval(interval1); // Usunięcie interwału
        }
    }, 500);

    
    // Startujemy interwał, który sprawdza co 1 sekundę, czy aura nadal istnieje
    const interval2 = setInterval(() => {
        const updatedAuras = token.actor?.auras || new Map();
        const stillHasAura = updatedAuras.has(AURA_NAME);
        if (!stillHasAura && !effectRemoved) {
            console.log(`Aura ${AURA_NAME} zniknęła. Usuwam efekt.`);
            Sequencer.EffectManager.endEffects({ name: "*ChannelFire*" })
            Sequencer.SoundManager.endSounds({ name: "*ChannelFire*" })
            effectRemoved = true; // Zmieniamy flagę na true, aby nie usuwać efektu więcej niż raz
            clearInterval(interval2); // Usunięcie interwału
        }
    }, 500);
}