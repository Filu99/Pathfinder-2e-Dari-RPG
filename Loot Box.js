
let tableName = "TestItem"
let target = token.center
let tableSize = 0
let lootPick
let lootArray = new Array()

new Dialog({
    title:'LootBox Macro',
    content:`
    <form>
      <div class="form-group">
        <label>Roll Table Name</label>
        <input type='text' name='inputField'></input>

      </div>
    </form>`,
    buttons:{
        yes: {
            icon: "<i class='fas fa-check'></i>",
            label: `Accept`
            }
        },
    default:'yes',
    close: html => {
        let result = html.find('input[name=\'inputField\']')
        if(game.tables.getName(result.val()) != null) {
            tableName = result.val()
            lootboxAnimation()
        }
    },
}).render(true);


function lootboxAnimation() {

    lootArray = game.tables.getName(tableName).collections.results.entries().toArray()
    rangeArray = new Array()
    lootArray.forEach((element) => rangeArray.push(element[1].range[1]))
    rangeArray.forEach((element) => tableSize += 1)

    let randomPick = Math.floor(Math.random() * 100) + 1;
    console.log(randomPick)

    for (let i = 0; i < tableSize; i++) {
        if (randomPick <= rangeArray[i]) {
            lootPick = i
            break
        }
    }

    let lootImage = lootArray[lootPick][1].img
    let lootName = lootArray[lootPick][1].text

    //STYL NAPISÓW
    const style = {
        "fill": "white",
        "fontFamily": "Arial Black",
        "fontSize": 28,
        "strokeThickness": 2
    }

//SEKWENCJA ANIMACJI
    new Sequence()

        .sound()
        .file("DKDatabase.Animations.Lootbox.smash_sound")
        .delay(2700)

        .sound()
        .file("DKDatabase.Animations.Lootbox.lever_sound")
        .delay(200)

        .sound()
        .file("DKDatabase.Animations.Lootbox.spin_sound")
        .delay(400)

        .sound().file("DKDatabase.Animations.Lootbox.jackpot_sound")
        .delay(2500)

        .effect()
        .waitUntilFinished(-600)
        .fadeIn(500)
        .fadeOut(200)
        .atLocation(target)
        .file("DKDatabase.Animations.Lootbox.loot_roll")
        .scale(0.7)
        .spriteOffset({x: 0, y: -100})

        .effect()
        .zIndex(5)
        .fadeOut(500)
        .atLocation(target)
        .file("DKDatabase.Animations.Lootbox.chest_opening")
        .scale(0.3)
        .spriteOffset({x: 0, y: 100})

        .sound()
        .file("DKDatabase.Animations.Lootbox.open_sound")
        .delay(1700)

        .sound()
        .file("DKDatabase.Animations.Lootbox.payout_sound")
        .delay(2500)

        .effect()
        .zIndex(10)
        .file(lootImage)
        .size(15)
        .scaleOut(10, 3000)
        .spriteRotation(90)
        .atLocation({x: target.x, y: target.y + 100})
        .moveTowards({x: target.x, y: target.y - 150})
        .duration(3000)
        .delay(2500)

        .effect()
        .file(lootImage)
        .zIndex(15)
        .size(150)
        .atLocation({x: target.x, y: target.y - 150})
        .delay(5499)
        .duration(5000).fadeOut(1000)

        .scrollingText()
        .atLocation({x: target.x, y: target.y - 225})
        .text(lootName, style)
        .duration(4000)
        .delay(5499)

        .play()
}