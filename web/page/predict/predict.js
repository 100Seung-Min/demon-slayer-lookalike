const URL = "../../model/";
let model, webcam, maxPredictions, isStop, max, maxPosition, maxName;

init();

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(400, 400, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
}

async function retry() {
    await webcam.play();
    window.requestAnimationFrame(loop);
    isStop = false;
}

async function pause() {
    await webcam.pause();
    isStop = true;
}

async function stop() {
    if (isStop == true) {
        await webcam.stop();
        document.getElementById("webcam-container").removeChild(document.getElementById("webcam-container").childNodes[0]);
        localStorage.setItem("character", maxName);
        window.location.href = "../result/result.html"
    } else {
        alert("사진을 찍어주세요")
    }
}

async function loop() {
    if (webcam != null) {
        webcam.update();
        await predict();
        window.requestAnimationFrame(loop);
    }
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    max = prediction[0].probability.toFixed(2)
    maxPosition = 0
    for (let i = 0; i < maxPredictions; i++) {
        if (max < prediction[i].probability.toFixed(2)) {
            maxPosition = i
        }
    }
    maxName = prediction[maxPosition].className
}