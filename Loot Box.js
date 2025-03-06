let tableName = "TestItem"
let target = token
let tableSize = 0
let lootPick
let lootArray = new Array()

lootArray = game.tables.getName(tableName).collections.results.entries().toArray()

rangeArray = new Array()

lootArray.forEach((element) => rangeArray.push(element[1].range[1]))

rangeArray.forEach((element) => tableSize += 1)

//console.log(rangeArray)

let randomPick = Math.floor(Math.random() * 100) + 1;

console.log(randomPick)

for(let i = 0; i < tableSize; i++) {
    if(randomPick <= rangeArray[i]) {
        lootPick = i
        break
    }
}
//console.log(lootPick)
//console.log(lootArray[lootPick][1].text, lootArray[lootPick][1].img)

let lootImage = lootArray[lootPick][1].img

new Sequence()

    .effect()
    .waitUntilFinished(-600)
    .fadeIn(300)
    .fadeOut(500)
    .atLocation(target)
    .file("DKDatabase.Animations.Lootbox.loot_roll")
    .scale(0.7)
    .spriteOffset({ x: 0, y: -100 })

    .effect()
    .fadeOut(500)
    .atLocation(target)
    .file("DKDatabase.Animations.Lootbox.chest_opening")
    .scale(0.3)
    .spriteOffset({ x: 0, y: 100 })

.play()