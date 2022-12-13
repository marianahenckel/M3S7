//setInterval(printNumbers, 5);

function printNumbers(from, to) {
   let current = from;
   let timerID = setInterval(function(){
    alert(current);
    if (current == to) {
        clearInterval(timerID);
   }
       current++;
}, 1000);
}
printNumbers(5, 10);
    
