var player = new Tone.Player("../assets/audio/weirdlaugh.wav").toMaster();

function startTone() {
  Tone.start();
  player.start();
}

function stopTone() {
  player.stop();
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