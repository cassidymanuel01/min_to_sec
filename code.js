
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let btnDisplays = document.getElementById("btnDisplays");
let btnDisplayss = document.getElementById("btnDisplayss");

btnDisplayss.addEventListener('click', () =>{
    seconds.value = (minutes.value*60);
    minutes.value = null;
});

btnDisplays.addEventListener('click', ()=>{
    minutes.value =(seconds.value/60);
    seconds.value =null;
});











