var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
var content;

Recognition.onresult=function (event){
    console.log(event);
    content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    var speak_data=content;
    var say_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(say_this);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    Image_format:'png',
    png_quality:90
});

var camera=document.getElementById("camera");