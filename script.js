$(document).ready(function() {

    // Array holds all of the hours available
    var hoursList = [
        "9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM",
        "6PM"
        ];

    console.log(hoursList);

    $( ".container" ).clone().prependTo( ".row" );
    
});
