var display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function calculate(){
    try{
        
            if(display.value == ""){
                display.value ="0 ";
           
            }
        display.value = eval(display.value)
    }
    catch(error){
   display.value("error")
    }
}
function clearDisplay(){
    display.value = "";
}