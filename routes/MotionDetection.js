var express = require('express');
var router = express.Router();
var _gpioPin = 14;
var _gpioConnected = false;
var _motionDetected = false;
var _intervalMs = 500;

var Gpio, motioinSensor;
try {
    Gpio = require('onoff').Gpio;
    motioinSensor = new Gpio(_gpioPin, 'in', 'both');
    _gpioConnected = true;
    console.log("connected to GPIO pin: " + _gpioPin);
} catch(e) {
    console.error("onoff not found");
}

function exit() {
    motioinSensor.unexport();
    process.exit();
}

if (_gpioConnected)
{
    motioinSensor.watch(function(err, value) {
        if (err) exit();
        //buzzer.writeSync(value);
        _motionDetected = true;
    });
}

router.get('/', function(req, res, next) {

    res.send({ MotionSensed: _motionDetected });
    console.log("motion detected: " + _motionDetected);
});

//// button is attaced to pin 17, led to 18
//var pin = 11;
//var GPIO = require('onoff').Gpio,
//    led = new GPIO(pin, 'out');
//
//
///* GET users listing. */
//router.get('/', function(req, res, next) {
//    var onOffValue = req.params.onOffValue;
//
//    led.writeSync(onOffValue);
//    res.send('bulb ' + onOffValue + ', pin: ' + pin);
//});


//router.get('/', function(req, res, next) {
//    console.log(req);
//    //var onOffValue = req.params.OnOffValue;
//    var onOffValue = req.query.OnOffValue;
//    res.send('bulb ' + onOffValue + ', pin: test');
//});


//var pin = 14;
//var GPIO, motionSensor;
//GPIO = require('onoff').Gpio;
//led = new GPIO(pin, 'out');
//
//router.get('/', function(req, res, next) {
//    //console.log(req);
//    //var onOffValue = req.params.OnOffValue;
//
//    var onOffValue = parseInt(req.query.OnOffValue);
//    led.writeSync(onOffValue);
//    res.send('bulb ' + onOffValue + ', pin: ' + pin);
//});

module.exports = router;