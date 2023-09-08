noseX=0
noseY=0


function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}

function setup(){
canvas=createCanvas(300, 300);
canvas.center()
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();


posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose',gotposes)
}

function modelLoaded(){
    console.log("Pose net is initialized")
}

function gotposes(result){
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x-15;
        noseY=result[0].pose.nose.y+15;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        image(clown_nose, noseX, noseY, 30, 30);

    }


    
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose, noseX, noseY, 30, 30);
   
    

}

function take_snapshot(){
    save('filter.png');
    
}

