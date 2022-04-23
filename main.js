noseX = 0;
noseY = 0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/Kjpb7xbm/580b57fbd9996e24bc43bed5.png");
}
function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    poseNet = ml5.poseNet(video,modalLoaded)
    poseNet.on('pose',gotPoses)
}

function modalLoaded(){
    console.log("poseNet is Initialised")
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nosex = " + noseX);
        console.log("nosey = " + noseY);
    }
}

function draw(){
 image(video,0,0,350,350);
 image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('myimg.png');
}