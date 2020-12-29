// For index hovers of explored page 

var laugh = new Tone.Player("../assets/audio/weirdlaugh.wav").toMaster();
var ar = new Tone.Player("../assets/audio/realtaaumentata.m4a").toMaster();
var awesome = new Tone.Player("../assets/audio/awesome.m4a").toMaster();
var er = new Tone.Player("../assets/audio/er.m4a").toMaster();
var cash = new Tone.Player("../assets/audio/cash.m4a").toMaster();
var nolimit = new Tone.Player("../assets/audio/nolimit.m4a").toMaster();
var agoodone = new Tone.Player("../assets/audio/agoodone.m4a").toMaster();

function enableTone() {
  Tone.start();
  let button = document.getElementById("audio-button");
  button.innerText="🎻 Audio Enabled 😍 Scroll Over For Audio Preview 👏";
}

function stop(method) {
  method.stop();
}

function startOnHover(method) {
  method.start();
}

// For tone.js trial
function startTone() {
  enableTone();
  laugh.start();
}

function stopTone() {
  laugh.stop();
}

// //attach a click listener to a play button
// document.querySelector('button')?.addEventListener('onclick', () => {
// 	Tone.start()
// 	console.log('audio is ready')
// })

// //create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");

// const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
// // play as soon as the buffer is loaded
// player.autostart = true;

// const player = new Tone.Player({
//   // url: "https://tonejs.github.io/audio/loop/FWDL.mp3",
//   // url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Short_clip_of_girl_laughing.wav",
//   // url: " https://upload.wikimedia.org/wikipedia/commons/e/ef/Laughter_and_clearing_voice.ogg",
//   url: ""
//   loop: true,
// }).toDestination();

// bind the interface
// document.querySelector("button").addEventListener("start", () => player.start());
// document.querySelector("button").addEventListener("stop", () => player.stop());