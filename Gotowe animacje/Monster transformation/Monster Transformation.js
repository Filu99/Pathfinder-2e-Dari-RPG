let myToken = token;
let heroData = myToken.actor.getRollData()

let notTransformed = ""
let transformed = ""

if(heroData.actor.name == "Giuliano"){
    notTransformed = "modules/DKDatabase/TokenArts/Giuliano/Giuliano_normal.png"
    transformed = "modules/DKDatabase/TokenArts/Giuliano/Giuliano_transformed.png"
}

if(heroData.actor.name == "Azulon Black"){
    notTransformed = "modules/DKDatabase/TokenArts/AzulonBlack/Azulon_normal.png"
    transformed = "modules/DKDatabase/TokenArts/AzulonBlack/Azulon_transformed.png"
}

if(heroData.actor.name == "Jacob Notaisky"){
    notTransformed = "modules/DKDatabase/TokenArts/JacobNotaisky/Jacob_normal.png"
    transformed = "modules/DKDatabase/TokenArts/JacobNotaisky/Jacob_transformed.png"
}

if(heroData.actor.name == "Stanley Kowalski"){
    notTransformed = "modules/DKDatabase/TokenArts/StanleyKowalski/Stanley_normal.png"
    transformed = "modules/DKDatabase/TokenArts/StanleyKowalski/Stanley_transformed.png"
}

let newImg

let flag = 0

if(myToken.actor.img == transformed){
    newImg = notTransformed
    flag = 1
}

if(myToken.actor.img == notTransformed){
    newImg = transformed
    flag = 1
}
if(flag == 1) {

    new Sequence()
        .sound()
        .file("DKDatabase.MonsterTransformation.build_up")

        .sound()
        .file("DKDatabase.MonsterTransformation.growl")
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
            myToken.actor.update({"img": newImg});
        })

        .play()
}