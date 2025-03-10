let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 20000;

function log(msg) {
  logElement.innerHTML += msg + "\n";
}

function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}

function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  log(recorder.state + " your reaction for " + (lengthInMS / 1000) + " seconds...");

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = event => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(
    () => recorder.state == "recording" && recorder.stop()
  );

  return Promise.all([
      stopped,
      recorded
    ])
    .then(() => data);
}

startButton.addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      preview.srcObject = stream;
      downloadButton.href = stream;
      preview.captureStream = preview.captureStream || preview.mozCaptureStream;
      document.getElementById("startButton").classList.add("hidden");
      document.getElementById("iframe").classList.remove("hidden");
      document.getElementById("theGoodStuff").classList.remove("hidden");

      return new Promise(resolve => preview.onplaying = resolve);
    }).then(() => startRecording(preview.captureStream(), recordingTimeMS))
    .then(recordedChunks => {
      let recordedBlob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      recording.src = URL.createObjectURL(recordedBlob);
      downloadButton.href = recording.src;
      downloadButton.download = "RecordedReaction.webm";
      document.getElementById("cta").classList.remove("hidden");

      log("Successfully recorded your Reaction! " + recordedBlob.size + " bytes of " +
        recordedBlob.type + " media");
    })
    .catch(log);
}, false);

