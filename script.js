// Sets the current day of the week, month, and date
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do");

// Sets current hour
var hourNow = moment().format("hA");
console.log(hourNow);

// Array holds all of the hours available
var hoursList = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"];


//Research the below code from: https://www.youtube.com/watch?v=zjYgz50E0mA&ab_channel=SteveGriffith
const init = function(){
    let t1
    t1 = document.getElementById("target1");

    div1 = document.querySelector(".timeBlockDiv");
    for(let i=0; i<5; i++){
        t1.appendChild(div1.cloneNode(true));
    }

}

document.addEventListener("DOMContentLoaded", init)

/*$.each(hoursList, function(i){
    console.log(i);
    /*var newRowDiv = $( ".row" ).clone();
    console.log(newRowDiv);
    htmlDiv = "<div id='row'>" + hoursList[i] + "</div>";
    console.log(hoursList[i]);
    $(".container").append(htmlDiv);
    
});*/

