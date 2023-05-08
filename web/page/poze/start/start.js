const URL = "../../../model/pozeCheck/";
let model, webcam, maxPredictions, max, maxPosition, maxName;
var isCountDown = true;

init();

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  try {
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    const flip = true;
    webcam = new tmPose.Webcam(550, 550, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);
    const canvas = document.getElementById("canvas");
    canvas.width = 550;
    canvas.height = 550;
    ctx = canvas.getContext("2d");
  } catch (e) {
    console.log(e);
  }
}

async function loop(timestamp) {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  try {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);
    for (let i = 0; i < maxPredictions; i++) {
      if(prediction[i].className == "Class 1" && prediction[i].probability.toFixed(2) == '1.00') {
        if(isCountDown) {
          isCountDown = false;
          countDown(3);
        }
      }
    }
    drawPose(pose);
  } catch (e) {
    console.log(e);
  }
}

function drawPose(pose) {
  if (webcam.canvas) {
    ctx.drawImage(webcam.canvas, 0, 0);
    if (pose) {
      const minPartConfidence = 0.5;
      tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  }
}

function countDown(remainTime) {
  document.getElementById("countDown").innerText = remainTime;
  setTimeout(() => {
    if (remainTime == 0) {
      window.location.href = "../poze/poze.html";
    } else {
      countDown(remainTime - 1);
    }
  }, 1000);
}
