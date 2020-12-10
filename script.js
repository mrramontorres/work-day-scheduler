// Sets the current day of the week, month, and date
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do");

// Sets current hour
var hourNow = moment().format("hA");
console.log("current time is: " + hourNow);

// Array holds all of the hours available
var hoursList = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"];
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
        console.log(hoursList[i]);

        t2.querySelector("span").innerHTML = hoursList[i];

        if(hourNow < hoursList[i]){
            console.log(hourNow < hoursList[i]);
            
        }else{
            t2.querySelector(".time").classList.add("past");
        };
        console.log(t2);
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
    

               console.log("the if statment is: " + (hourNow < hoursList[i]));
            t2.className("time","past");


});*/

