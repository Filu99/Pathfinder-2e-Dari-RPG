/**
 *
 * After Template Creation
 *
 */

// ------------------------------------------------
// C U S T O M I Z E    T H E    A N I M A T I O N
// ------------------------------------------------
//
const SOUND_NAME = "firestorm";

const ANIMATION1 = 'animated-spell-effects-cartoon.fire.19';
const SCALE1 = 2.3; // Size of the animation. Default value: 1.5
const WAIT_UNTIL_FINISHED1 = 0; // Default value: -1000
const WAIT_UNTIL_FINISHED_ENABLED1 = true;
const ENABLED1 = true;
const SOUND_ENABLED1 = true;
const SOUND1 = 'DKDatabase.Abilities.AzulonBlack.ignition';
const DELAY_SOUND1 = 0; // Default value: 0
const START_TIME_SOUND1 = 1000; // Default value: 0
const WAIT_UNTIL_FINISHED_SOUND_ENABLED1 = false;
const WAIT_UNTIL_FINISHED_SOUND1 = 0;

const ANIMATION2 = 'blfx.spell.range.ray.fire_bolt.impact1.intro.yellow';
const WAIT_UNTIL_FINISHED2 = -1300; // Default value: -1300
const WAIT_UNTIL_FINISHED_ENABLED2 = true;
const ENABLED2 = false;
const SOUND_ENABLED2 = false;
const SOUND2 = 'blfx.sound.spell.cast.fire_bolt.1';
const DELAY_SOUND2 = 0; // Default value: 0
const START_TIME_SOUND2 = 0; // Default value: 0
const WAIT_UNTIL_FINISHED_SOUND_ENABLED2 = false;
const WAIT_UNTIL_FINISHED_SOUND2 = 0;

const ANIMATION3 = 'blfx.spell.template.circle.tornado1.fire1.clockwise.loop';
const SCALE3 = 1.6; // Size of the animation. Default value: 1.5
const BELOW_TOKENS3 = false;
const HIDDEN_TEMPLATE3 = true;
const DELETE_TEMPLATE3 = false;
const PERSIST3 = true;
const ENABLED3 = true;
const SOUND_ENABLED3 = true;
const SOUND3 = 'DKDatabase.Abilities.AzulonBlack.firestorm';
const DELAY_SOUND3 = 0; // Default value: 0
const START_TIME_SOUND3 = 0; // Default value: 0
const WAIT_UNTIL_FINISHED_SOUND_ENABLED3 = false;
const WAIT_UNTIL_FINISHED_SOUND3 = 0;
//
// ------------------------------------------------

await blfx.helpers.wait(200);
const myToken = canvas.tokens.controlled[0] ?? sourceToken;

if (typeof templateDocument === 'undefined' || templateDocument === null) return;

if (HIDDEN_TEMPLATE3) {
  await templateDocument.update({ hidden: true });
}

const elevation = templateDocument.elevation ?? 0;

await new Sequence()

  // ON SOURCE TOKEN
  .sound()
  .playIf(SOUND_ENABLED1)
  .file(SOUND1)
  .delay(DELAY_SOUND1)
  .startTime(START_TIME_SOUND1)
  .preset('conditionalWait', [WAIT_UNTIL_FINISHED_SOUND_ENABLED1, WAIT_UNTIL_FINISHED_SOUND1])

  .effect()
  .playIf(ENABLED1)
  .atLocation(myToken)
  .file(ANIMATION1)
  .scaleToObject(SCALE1)
  .center()
  .rotateTowards(templateDocument)
  .preset('conditionalWait', [WAIT_UNTIL_FINISHED_ENABLED1, WAIT_UNTIL_FINISHED1])

  // FROM SOURCE TO TARGET
  .sound()
  .playIf(SOUND_ENABLED2)
  .file(SOUND2)
  .delay(DELAY_SOUND2)
  .startTime(START_TIME_SOUND2)
  .preset('conditionalWait', [WAIT_UNTIL_FINISHED_SOUND_ENABLED2, WAIT_UNTIL_FINISHED_SOUND2])

  .effect()
  .playIf(ENABLED2)
  .file(ANIMATION2)
  .atLocation(myToken)
  .stretchTo(templateDocument)
  .preset('conditionalWait', [WAIT_UNTIL_FINISHED_ENABLED2, WAIT_UNTIL_FINISHED2])

  // ON TARGET
  .sound()
  .name(SOUND_NAME)
  .playIf(SOUND_ENABLED3)
  .file(SOUND3)
  .endTime(7000)
  .delay(DELAY_SOUND3)
  .duration(600000)
  

  .effect()
  .playIf(ENABLED3)
  .file(ANIMATION3)
  .atLocation(templateDocument)
  .scaleToObject(SCALE3)
  .scaleIn(0.1, 1000)
  .rotateIn(180, 1000)
  .scaleOut(0.1, 1000)
  .rotateOut(-180, 1000)
  .elevation(elevation)
  .belowTokens(BELOW_TOKENS3)
  .tieToDocuments(templateDocument)
  .attachTo(templateDocument, { bindVisibility: false })
  .waitUntilFinished()
  .persist(PERSIST3)
  .play();


 if (ENABLED3 && DELETE_TEMPLATE3) {
  await templateDocument?.delete();
  Sequencer.SoundManager.endSounds({ name: "ScorchingColumn" })
 }


await Sequencer.SoundManager.endSounds({ name: "firestorm" })