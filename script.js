// Sets the current day of the week, month, and date
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do, HH:mm");

// TODO fix hour proccessing
//var hourNow = 12; 
var hourNow = moment().format("H");
console.log("Current time variable is: " + hourNow);

// Array holds all of the hours available
var hoursList = [9,10,11,12,13,14,15,16,17,18];
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
        var previousText = localStorage.getItem(hoursList[i]);
            if(previousText !== null){
                t2.getElementsByClassName("corn")[0].value = previousText;
            }
            /*

            console.log("Current hour: " + hourNow);
            console.log("future: " + (hourNow < hoursList[i]));
            console.log("present: " + (hourNow == hoursList[i]));
            console.log("past: " + (hourNow > hoursList[i]));
            */
           console.log(hourNow);
           console.log(hoursList[i]);
       // Adds the approprite color coding for the time baesd on current hour of the day
        if(hourNow > hoursList[i]) {
            t2.querySelector(".time").classList.add("past");
            console.log('print1');
        }else if (hourNow == hoursList[i]) {
            t2.querySelector(".time").classList.add("present");
            console.log('print2');
        }else if (hourNow < hoursList[i]){
            t2.querySelector(".time").classList.add("future");
            console.log('print3');
        } else {
            console.log("print4");
        }
        //console.log(t2);
    }
    //TODO move this from javascript to style sheet
    div1.style.display = "none";

}

//Listens for any saveBtn element to be clicked
function saveText(x){
    //testing function
    var help = x.parentNode;
    //console.log(x);
    //console.log(x.parentNode);
    //console.log(help);
    //console.log(help.getElementsByClassName("corn")[0]);
    var newText =  help.getElementsByClassName("corn")[0].value;
    //console.log(newText);
    //console.log(help);
    //console.log(help.getElementsByClassName("thisISit")[0].innerHTML);
    var thisIStime = help.getElementsByClassName("thisISit")[0].innerHTML;
    
    localStorage.setItem(thisIStime, newText);

}


//Not sure I think this waits until the page content has loaded
document.addEventListener("DOMContentLoaded", init)

/*

    var lastNewText = JSON.parse(localStorage.getItem("newText"));
    myText.innerHTML = lastNewText.newText;
    */