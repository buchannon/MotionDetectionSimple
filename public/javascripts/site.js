var BlinkOn = function() {
    //$.get( "/ServerBlinkOn", { name: "John", time: "2pm" } )
    $.get("/Bulb", { OnOffValue: "1"}).done(function( data ) {
        //alert( data );
    });
};

var BlinkOff = function() {
    //$.get( "/ServerBlinkOn", { name: "John", time: "2pm" } )
    $.get("/Bulb", { OnOffValue: "0"}).done(function( data ) {
        //alert( data );
    });
};