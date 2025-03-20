//Last Updated: 8/7/2023
//Author: EskieMoh#2969

let target = Array.from(game.user.targets)[0];

let ranOffset = (Math.random() * (0.4 +0.4)  -0.4);

const targetCenter = {
x: target.x+canvas.grid.size*target.document.width/2,
y: target.y+canvas.grid.size*target.document.width/2,
};

const tokenCenter = {
  x: token.x + canvas.grid.size * token.document.width / 2,
  y: token.y + canvas.grid.size * token.document.width / 2,
};

const distance = Math.sqrt(
  Math.pow(targetCenter.x - tokenCenter.x, 2) + Math.pow(targetCenter.y - tokenCenter.y, 2)
);

const gridDistance = (distance/canvas.grid.size)*5

let projHeight = [];
let projX = [];
let impactSize = [];
if (gridDistance >= 85){

projHeight = canvas.grid.size/150;
projX = true;
impactSize = 1.75;   

} else if (gridDistance >= 55) { 
    
projHeight = canvas.grid.size/225;
projX = true;
impactSize = 1.5*2;
    
} else if (gridDistance > 30) { 
    
projHeight = canvas.grid.size/300;
projX = true;
impactSize = 1.25*2;   
} else  { 
    
projHeight = 1;
projX = false;
impactSize = 1*2;   
    
}

console.log(distance);

new Sequence()
.sound()
.file("DKDatabase.Abilities.AzulonBlack.elementalBlast")
.startTime(300)
.fadeOutAudio(300)
.effect()
.file("animated-spell-effects-cartoon.fire.33")
.atLocation(token,{offset:{x:-0, y: -0}, gridUnits:true, local:false})
.rotateTowards(targetCenter, {local: true})
.spriteOffset({x: (-1.0+ranOffset)*token.document.width, y:-0.4*token.document.width}, {gridUnits:true})
.size({width: token.document.width*2, height: token.document.width*1.25}, {gridUnits:true, uniform: false})
.rotate(-90)
.zIndex(1)

.effect()
.delay(0)
.file("animated-spell-effects-cartoon.fire.29")
.atLocation(token,{offset:{x:0* token.document.width, y: ranOffset}, gridUnits:true, local:true})
.stretchTo(target, {onlyX: projX})
.playbackRate(1)
.scale(projHeight*2)
.waitUntilFinished(-900)

.effect()
.file("animated-spell-effects-cartoon.fire.14")
.atLocation(target,{offset:{x:0, y:0}, gridUnits:true})
.size(impactSize, {gridUnits:true})
.rotateTowards(token)
.rotate(180)
.spriteOffset({x: 0-impactSize/4, y:-0}, {gridUnits:true})

.play();