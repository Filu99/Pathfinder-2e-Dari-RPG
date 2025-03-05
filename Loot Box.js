let tableName = "Test"

let tableSize = 0

let lootPick

let lootArray = new Array()
lootArray = game.tables.getName(tableName).collections.results.entries().toArray()

rangeArray = new Array()

lootArray.forEach((element) => rangeArray.push(element[1].range[1]))

rangeArray.forEach((element) => tableSize += 1)

console.log(rangeArray)

let randomPick = Math.floor(Math.random() * 100) + 1;

console.log(randomPick)

for(let i = 0; i < tableSize; i++) {
    if(randomPick <= rangeArray[i]) {
        lootPick = i
        break
    }
}
console.log(lootPick)
console.log(lootArray[lootPick][1].text, lootArray[lootPick][1].img)