const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //text임
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// "1".padStart(2,"0"); 01  길이,채울것
// "1".padEnd(2,"0");   10    
getClock();
setInterval(getClock,1000);     //Interval >> ~마다 연속적으로 실행

// setTimeout(sayHello,5000);      //TimeOut >> ~의 시간이 지날때마다 실행



