 const hourE = document.getElementById('hour')
 const minuteE = document.getElementById('minute')
 const secondE = document.getElementById('seconds')
const ampmE = document.getElementById('name2')

console.log(hourE);
console.log(minuteE);
console.log(secondE);

 function updateClock(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = (hour>12)? 'PM':'AM';;
   console.log('debug');
   console.log(hour);
   console.log(ampm);

    hourE.innerText =(hour>10)? hour:"0"+hour;
    minuteE.innerHTML=(minute>10)? minute:"0"+minute; 
    secondE.innerHTML= (second>10)? second:"0"+second;
    ampmE.innerHTML=ampm;
    setTimeout(()=>{updateClock()},1000)
}
updateClock()