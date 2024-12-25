

function DisplayTime(){

    var clock = document.getElementById("Time");

    // Get the Time by Data Object 
     var fullTime =  new Date;
     var Hour = fullTime.getHours();
     var Min = fullTime.getMinutes();
     var second = fullTime.getSeconds();
     var TimeString = ` ${Hour} : ${Min} : ${second}`;

     clock.innerHTML = TimeString;

     // Calling the Function for Every 1000 miliSecond = 1sec
     setInterval("DisplayTime()", 1000)

}



