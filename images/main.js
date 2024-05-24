const inpBtns=document.querySelectorAll("input");
const display=inpBtns[0];

function addMe(num){
    display.value +=num;
}
function showResult(){
    if (display.value==="")return;

    if(
        display.value[display.value.length-1]==="+"||
        display.value[display.value.length-1]==="-"
    ){return alert("invalid input")}
    display.value=eval(display.value);
}