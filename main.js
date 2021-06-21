Webcam.set({
    width:400, height:300,image_format:'png',png_quality:90

});
Webcam.attach("camera");
function click1() {
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });    
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3Lfg8ZePJ/model.json",model);
function model() {
    console.log("model loaded")
}