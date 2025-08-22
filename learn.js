let screen= document.getElementById('result');
function showNumber(value){
    screen.value +=value;
}
function appendValue(value){
    screen.value+=value;
}
function calculate(){
    screen.value= eval(screen.value);
}
function clearScreen(){
    screen.value='';
}
function DeleteValue(){
    screen.value= screen.value.slice(0,-1);
}