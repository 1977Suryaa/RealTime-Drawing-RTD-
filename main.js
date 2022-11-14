function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    webcam=createCapture(VIDEO)
    webcam.size(350,350)
    posenet=ml5.poseNet(webcam,modelLoaded)
    posenet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("model loaded")
}

function gotPoses(result){
    if(result.length>0){
        console.log(result)
        nose_X=result[0].pose.nose.x
        nose_y=result[0].pose.nose.y
        left_wrist=result[0].pose.leftWrist.x
        right_wrist=result[0].pose.rightWrist.x
        min=floor(left_wrist-right_wrist)

        
    }
}
function draw(){
    background("pink")
    fill("red")
    stroke("black")
    square(nose_X,nose_y,min)
    document.getElementById("empty").innerHTML="use your wrist to increase and decrease square size= "+min+"px"
    
}