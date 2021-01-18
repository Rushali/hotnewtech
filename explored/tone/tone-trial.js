// //attach a click listener to a play button
// document.querySelector('button')?.addEventListener('onclick', () => {
// 	Tone.start()
// 	console.log('audio is ready')
// })

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");

function startTone() {
  console.log('started?');
  Tone.start();
}
