status = "";

function preload(){
    img = loadImage('Bedroom.jpg')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(){
    objects = results;
}