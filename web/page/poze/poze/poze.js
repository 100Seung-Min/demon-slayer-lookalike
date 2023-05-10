const URL = "../../../model/poze/";
let model, webcam, maxPredictions, max, maxPosition, maxName;
var remainTime = 300
var currentQuizIndex = 0;
var score = 0;
var life = 2;
var poze = [
    "https://cdn.discordapp.com/attachments/827036971465572352/1105667568729063525/20230510_102747.jpg",
    "https://cdn.discordapp.com/attachments/827036971465572352/1105667630502785034/20230510_102815.jpg",
    "https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/1360248c53dd4486b685172cae65afec/27832387ed3c42b48fee5dc258ab3b1b_1563670162.jpg",
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202201/13/4c26af37-af53-4dd6-b18d-5d89a987bf8d.jpg",
    "https://blog.kakaocdn.net/dn/pqBoG/btraBTkuvko/17cdRCOwUlfbImu8IqAXgK/img.png",
    "https://img.extmovie.com/files/attach/images/148/016/601/086/a25b09dae96dcba833f8ae1fad691983.jpg",
    "https://scontent-ssn1-1.xx.fbcdn.net/v/t31.18172-8/25075037_1008575549293712_1936208691505059100_o.jpg?stp=cp0_dst-jpg_e15_q65_s403x403&_nc_cat=109&ccb=1-7&_nc_sid=8024bb&_nc_ohc=8UbLiqAoEu0AX8BMlRD&_nc_ht=scontent-ssn1-1.xx&oh=00_AfC9NqQFSaHpo6HMabrIzvrdJPtryv9zlp-wIgdqfHs9Nw&oe=64810BDA",
    "http://file.mk.co.kr/meet/neds/2023/01/image_readtop_2023_79592_16749764425331903.jpg",
    "https://figurepresso.com/web/upload/NNEditor/20201007/biDhSCyBUMNlzw_shop1_144805.jpg",
    "https://postfiles.pstatic.net/MjAyMTAxMjNfMTQg/MDAxNjExMzM1NDE4MzA2.vV1JwNPtqS-OfIvWRbt79vc5pPxvLLkyLcsfhPZpFAcg.PhN7SbF9QygGBWkJ9PZRnULM95UuGXNMY6a3vhU85Gkg.JPEG.gssol01/maxresdefault.jpg?type=w773",
    "https://t1.daumcdn.net/cfile/tistory/1102CB354DE3B92B3A",
    "https://image.yes24.com/blogimage/blog/o/r/orizone0/movie_image1IVI6TGL.jpg",
    "https://mblogthumb-phinf.pstatic.net/20151009_290/qufqmghgxf_1444330326529X7K7s_PNG/20151009_004430.png?type=w2",
    "https://image2.1004gundam.com/item_images/goods/380/1376393266.jpg",
    "http://timg.humoruniv.com/thumb_crop_resize.php?url=http://down.humoruniv.com//hwiparambbs/data/editor/pdswait/e_s542756001_6647ef99356b8784d586c6b15603b013cf178445.jpg?SIZE=800x939",
    "https://img.etnews.com/news/article/2016/09/20/cms_temp_article_20181652091828.jpg",
    "https://static.inews24.com/v1/2adacb78513ee4.jpg",
    "https://edgio.clien.net/F01/5508945/b86ab91a8f314e23b15.JPEG?w=230&h=150",
    "https://i.ytimg.com/vi/eCk6sW5qXaQ/maxresdefault.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202110/13/sportstoday/20211013172114229fvsn.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTQ1/MDAxNTYzMDgxMjc0MzIw.u_WQNZyGKve0DWhnJlMJ4gFw8-rITaFMyT9sHeYFmM8g.a1OrgO1xmoK7rXGWjZa9UpXrXxcEyaJ9_4MdSOIiRMQg.JPEG.doll8861/Screenshot_20190714-135020_Samsung_Internet.jpg?type=w800",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkX1gFeFkJ_zcepLcaCFftXbytnaXG-tA0vb0qMI2W7OU4BFwKt_Ni8a71ET9RZ_bZW0&usqp=CAU",
    "https://i.ytimg.com/vi/rHtTJ6GqDxU/hqdefault.jpg",
    "https://dispatch.cdnser.be/cms-content/uploads/2022/04/08/2db022d7-ce6f-45dc-8bda-6e41c7803534.jpg",
    "https://newsimg.sedaily.com/2018/10/18/1S5YLW9VQQ_1.jpg",
    "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/50257614_2294798580791151_5483107674167967744_n.png?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=YPuu23Mcn40AX8idFqa&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAoL5VTGg9kEr5QpuSvmehRbE4uRn5Nbn_vYLG49qYnEg&oe=64825A5A",
    "https://i.pinimg.com/736x/84/d5/98/84d5987fb1a25bf2ade8229fc24ea8bb.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyMjA2MThfMTgy/MDAxNjU1NTI2NTEyMjM1.U5iDn8yYnWp7yTG_8g9LbAKEqpzoO9apLBt1MqsFnz0g.M7tSiRcwj1TsynhLZWBYs9_69liWYsaQ7zJUlXZn3cEg.JPEG.dewichien/%ED%85%9F%EC%B9%B4%EC%9D%B4.jpg?type=w800",
    "https://mblogthumb-phinf.pstatic.net/MjAyMjA2MThfMTgy/MDAxNjU1NTI2NTEyMjM1.U5iDn8yYnWp7yTG_8g9LbAKEqpzoO9apLBt1MqsFnz0g.M7tSiRcwj1TsynhLZWBYs9_69liWYsaQ7zJUlXZn3cEg.JPEG.dewichien/%ED%85%9F%EC%B9%B4%EC%9D%B4.jpg?type=w800",
    "https://www.footballist.co.kr/news/photo/202012/129542_55351_4156.jpg",
    "https://wimg.mk.co.kr/meet/neds/2021/07/image_readtop_2021_730456_16274770344732860.jpg"
]

init();
setQuiz();

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
        time()
    } catch (e) {
        console.log(e);
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    try {
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        const prediction = await model.predict(posenetOutput);
        if(prediction[currentQuizIndex].probability.toFixed(2) >= '0.50') {
            score += 100;
            setTimeout(() => {
                setQuiz();
            }, 1000);
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

function setQuiz() {
    currentQuizIndex = Math.floor(Math.random() * poze.length - 1)
    document.getElementById("img").src = poze[currentQuizIndex]
    document.getElementById("score").innerText = score
    remainTime = 300;
    time();
}

function time() {
    if(remainTime == 0) {
        let lifeImg = document.querySelectorAll('.life');
        if(life == 0) {
            localStorage.setItem('pozeScore', score);
            lifeImg[life].src = "../../../img/ic_no_life.png";
            window.location.href = "../result/result.html";
        } else {
            lifeImg[life].src = "../../../img/ic_no_life.png";
            life--;
            setTimeout(() => {
                setQuiz();
            }, 1000);
        }
    } else {
        setTimeout(() => {
            remainTime--;
            document.getElementById("remainTime").value = remainTime;
            time()
        }, 10);
    }
}