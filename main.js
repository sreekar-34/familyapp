//https://teachablemachine.withgoogle.com/models/8piyTYheL/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    image_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8piyTYheL/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
  if(error){
    console.log("error")
  }
  else{
    console.log(result)
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_accuracy").innerHTML=result[0].toFixed(3)
}
}