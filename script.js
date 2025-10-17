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

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


function square() {
  let display = document.getElementById("display");
  display.value = Math.pow(display.value, 2);
}

function sqrt() {
  let display = document.getElementById("display");
  display.value = Math.sqrt(display.value);
}

function sin() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  display.value = Math.sin(value * Math.PI / 180).toFixed(4);
}

function cos() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  display.value = Math.cos(value * Math.PI / 180).toFixed(4);
}

function tan() {
  let display = document.getElementById("display");
  let value = parseFloat(display.value);
  display.value = Math.tan(value * Math.PI / 180).toFixed(4);
}
