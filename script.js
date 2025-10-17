const display = document.getElementById("display");
display.value = "112345";

function appendChar(char){
    display.value += char;
}

function clearDisplay(){
    display.value = "";
}

function deleteChar(){
    display.value = display.value.slice(0,-1);
}

function Calculate(){
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}