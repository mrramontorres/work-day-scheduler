// Sets the current day of the week, month, and date
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do");

// TODO fix hour proccessing
var hourNow = 12; 
// var hourNow = moment().format("H");
console.log("Current time variable is: " + hourNow);

// Array holds all of the hours available
var hoursList = ["9","10","11","12","13","14","15","16","17","18"];
//console.log("hoursList array index read is: " + hoursList.length);

//Research the below code from: https://www.youtube.com/watch?v=zjYgz50E0mA&ab_channel=SteveGriffith
// Function that initiizes the creation of new timeblock divs
const init = function(){
    let t1
    t1 = document.getElementById("target1");
    div1 = document.querySelector(".timeBlockDiv");
    for(let i=0; i<hoursList.length-1; i++){
        var divModified = div1.cloneNode(true);
        //console.log(divModified);
        var t2 = t1.appendChild(divModified);
        // Adds the appropriate hour from the hourArray
        //console.log(hoursList[i]);
        t2.querySelector("span").innerHTML = hoursList[i];
            /* TEST TIME CONSOLE
            console.log("Current hour: " + hourNow);
            console.log("past: " + (hourNow > hoursList[i])); //past
            console.log("present: " + (hourNow == hoursList[i])); //present
            console.log("future: " + (hourNow < hoursList[i])); //future
            */
       // Adds the approprite color coding for the time baesd on current hour of the day
        if(hourNow < hoursList[i]) {
            t2.querySelector(".time").classList.add("future");
        }else if (hourNow == hoursList[i]) {
            t2.querySelector(".time").classList.add("present");
        }else if (hourNow > hoursList[i]){
            t2.querySelector(".time").classList.add("past");
        };
        console.log(t2);

    }
    //TODO move this from javascript to style sheet
    div1.style.display = "none";

}

function saveText(){
    alert("something was clicked");
}


//TODO listen for a save button click

//TODO after click select textarea to save in local storage

//TODO capture any text

//Not sure I think this waits until the page content has loaded
document.addEventListener("DOMContentLoaded", init)



//CODE NOT USED
/*$.each(hoursList, function(i){
    console.log(i);
    /*var newRowDiv = $( ".row" ).clone();
    console.log(newRowDiv);
    htmlDiv = "<div id='row'>" + hoursList[i] + "</div>";
    console.log(hoursList[i]);
    $(".container").append(htmlDiv);
    

               console.log("the if statment is: " + (hourNow < hoursList[i]));
            t2.className("time","past");


});*/

