var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '/sounds/barking-dog.mp3');
//audioElement.setAttribute('autoplay', 'autoplay');
var makingNoise = false;

var MakeNoise = function() {
    audioElement.play();
};

var StopAll = function() {
    audioElement.pause();
};

var StartSensing = function() {
    checkMotionSensor();
};

function checkMotionSensor(){
    $.get("/MotionDetection").done(function(data) {
        if (data != false && data.MotionSensed)
        {
            MakeNoise();
        }
        else
        {
            setTimeout(checkMotionSensor, 500); //1000ms = 1s
        }
    });
}

//var BlinkOff = function() {
//    //$.get( "/ServerBlinkOn", { name: "John", time: "2pm" } )
//    $.get("/Bulb", { OnOffValue: "0"}).done(function( data ) {
//        //alert( data );
//    });
//};