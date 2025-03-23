let myToken = token;
let heroData = myToken.actor.getRollData()

let notTransformed = ""
let transformed = ""

if(heroData.actor.name == "Giuliano"){
    notTransformed = "modules/DKDatabase/TokenArts/Giuliano/1NormalGiuliano.png"
    transformed = "modules/DKDatabase/TokenArts/Giuliano/1OgreGiuliano.png"
}

if(heroData.actor.name == "Azulon Black"){
    notTransformed = "modules/DKDatabase/TokenArts/AzulonBlack/1NormalAzulon.png"
    transformed = "modules/DKDatabase/TokenArts/AzulonBlack/1OgreAzulon.png"
}

if(heroData.actor.name == "Jacob Notaisky"){
    notTransformed = "modules/DKDatabase/TokenArts/JacobNotaisky/1NormalJacob.png"
    transformed = "modules/DKDatabase/TokenArts/JacobNotaisky/1OgreJacob.png"
}

if(heroData.actor.name == "Stanley Kowalski"){
    notTransformed = "modules/DKDatabase/TokenArts/StanleyKowalski/1NormalStanley.png"
    transformed = "modules/DKDatabase/TokenArts/StanleyKowalski/1OgreStanley.png"
}

// Debugowanie, czy ścieżki są poprawnie ustawione
console.log(`Current Image: ${myToken.actor.img}`);
console.log(`Expected Normal: ${notTransformed}`);
console.log(`Expected Transformed: ${transformed}`);

let newImg

let flag = 0

if(myToken.document.texture.src == transformed){
    newImg = notTransformed
    flag = 1
console.log(`transformacja`);
}

if(myToken.document.texture.src == notTransformed){
    newImg = transformed
    flag = 1
console.log(`nietransformacja`);
}
if(flag == 1) {
    
    // Debugowanie nowego obrazu
    console.log(`New Image: ${newImg}`);
    console.log(myToken.actor.prototypeToken.texture.src);

    new Sequence()
        .sound()
        .file("DKDatabase.MonsterTransformation.build_up")

        .sound()
        .file("DKDatabase.MonsterTransformation.ogre")
        .delay(1935)
        .playIf(newImg == transformed)

        .effect()
        .zIndex(100)
        .copySprite(myToken)
        .zIndex(0)
        .delay(1000)
        .loopProperty('sprite', 'position.x', {
            from: -0.03,
            to: 0.03,
            duration: 1000,
            pingPong: true,
            delay: 0,
            gridUnits: true,
        })
        .loopProperty('sprite', 'position.y', {
            from: -0.03,
            to: 0.03,
            duration: 10,
            pingPong: true,
            delay: 0,
            gridUnits: true,
        })

        .effect()
        .delay(500)
        .file("jb2a.screen_overlay.01.bad_omen.dark_black")
        .screenSpace()
        .screenSpacePosition({ x: 0, y: 0 })
        .screenSpaceAboveUI()
        .fadeIn(1200)
        .fadeOut(2000, {delay: -1500})

        .effect()
        .file("jb2a.misty_step.02.purple")
        .atLocation(myToken)
        .scaleToObject(2.5)
        .randomRotation()
        .zIndex(110)
        .delay(650)
        .wait(1935)
        .thenDo(() => {
            myToken.document.update({"texture.src": newImg});
        })

        .play()
}