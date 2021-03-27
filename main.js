video = ""
status = ""
objects = []

function preload(){
     video = createVideo("video.mp4")
     video.hide()
}

function setup(){
    canvas = createCanvas(400 , 400)
    canvas.parent("canvas")
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
    video.volume(0)
}

function gotResults(error , results){
    if (error) {
        console.log(error)
    }
    else{
      console.log(results)
      objects = results
    }
}

function draw(){
    image(video ,0,0,400,400)

    if (status != "") {
        object_detecter.detect(video , gotResults)
        for (let i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : objects detected"
            document.getElementById("objects").innerHTML = "Number of objects detected = "+objects.length;
            objects_name = objects[i].label
            x = objects[i].x
            y = objects[i].y
            width = objects[i].width
            height = objects[i].height
            acc = floor(objects[i].confidence * 100)+"%"


            r = random(255)
            g = random(255)
            b = random(255)

            fill(r,g,b)
            text(objects_name+" "+acc,x,y -7)
            textSize(15)
            noFill()
            stroke(r,g,b)
            strokeWeight(1)
            rect(x,y,width,height)
        }
    }
}