video = ""
status = ""

function preload(){
     video = createVideo("video.mp4")
     video.hide()
}

function setup(){
    canvas = createCanvas(400 , 400)
    canvas.parent("canvas")
}

function draw(){
    image(video ,0,0,400,400)
}

function start(){
    object_detecter = ml5.objectDetector("cocossd" , modelloaded)
    document.getElementById("status").innerHTML = "Status: Detecting objects"
}

function modelloaded(){
    console.log("loaded!")
    status = true
    video.loop()
    video.speed(1)
    video.volume(1)
}