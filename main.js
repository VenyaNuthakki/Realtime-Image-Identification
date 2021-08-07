function preload(){

}

function setup(){
    canvas= createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1LoM9iLzh/model.json", modelloaded);
}

function modelloaded(){
    console.log("modelloaded");
}

function draw(){
    image(video, 0, 0, 500, 400);
    classifier.classify(video,getresult);
}

function getresult(error, results){
    if (error){
        console.log(error);
    }

    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3);
    }
}