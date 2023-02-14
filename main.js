
noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function modelLoaded() {
    console.log('Posenet Is Initialized!');
}

function draw() {
    background('#ADD8E6');
    fill('#3CDFFF');
    stroke('#58CCED');
    square(noseX, noseY, difference);
}