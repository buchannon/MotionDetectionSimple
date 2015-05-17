var Gpio = require('onoff').Gpio,
    //buzzer = new Gpio(18, 'out'),
    pir = new Gpio(14, 'in', 'both');

pir.watch(function(err, value) {
    if (err) exit();
    //buzzer.writeSync(value);
    console.log('Intruder detected');
    //if(value == 1)  require('./mailer').sendEmail();
});

console.log('Pi Bot deployed successfully!');
console.log('Guarding the Magic pencil...');

function exit() {
    //buzzer.unexport();
    pir.unexport();
    process.exit();
}





var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Motion Detection' });
});

module.exports = router;
