  
  
  Webcam.set({
    width: 300,
    height: 230,
    image_format: "png",
    png_quality: 100,

    constraints:{
        facingMode:"environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("picture").innerHTML = "<img id='images' src=" + data_uri + ">";

    });


}
console.log(ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelLoded);

function modelLoded() {
    console.log("modelLoded");

};

function check(){
    img=document.getElementById("images");
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if (error){
        console.error(error);
    }
    else (result)
    console.log(result);
    document.getElementById("object_name").innerHTML=result[0].label;
}


