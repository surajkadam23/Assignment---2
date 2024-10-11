
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let prerecord = document.getElementById('previourecord');

let minute = 0;
let second = 0;
let milisecond = 0;
let timer = false;



start.addEventListener('click', function() {
    if (!timer) { 
        timer = true;
        main();
    }
    setInterval(main,10);
});

stop.addEventListener('click', function() {
    timer = false; 
     
    document.getElementById('r1').textContent = `${minute}`;
    document.getElementById('r2').textContent = `${second}`;
    document.getElementById('r3').textContent = `${milisecond}` ;

    let min = minute;
    let sec = second;
    let ms = milisecond;

    if(minute < 10){
        min = "0" + min;
    }
    if(second < 10){
    sec = "0" + sec;          
    }

    let previousrecord = `${min}:${sec}:${ms}`; 
    let listItem = document.createElement("li");   
    listItem.textContent = `Record : ${previousrecord}`;   
    list.appendChild(listItem);
});

reset.addEventListener('click', function() {
     timer = false;
     minute =0;
     second=0;
     milisecond=0;
     document.getElementById('list').textContent = "";
     document.getElementById('minute').textContent = "00";
     document.getElementById('second').innerHTML = "00";
     document.getElementById('milisecond').innerHTML = "00";
     document.getElementById('r1').textContent = "00";
     document.getElementById('r2').innerHTML = "00";
     document.getElementById('r3').innerHTML = "00";


});

function main() {
   
        if (timer) {
            milisecond += 10;

            if (milisecond >= 1000) {
                second++;
                milisecond = 0;
            }

            if (second >= 60) {
                minute++;
                second = 0;
            }
            let min = minute;
            let sec = second;
            let ms = milisecond;

            if(minute < 10){
                min = "0" + min;
            }
            if(second < 10){
            sec = "0" + sec;          
            }
             document.getElementById('minute').innerText = min;
             document.getElementById('second').innerText = sec;
             document.getElementById('milisecond').innerText = ms ;

            
        }
     
}