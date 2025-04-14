let [sec, min, hours] = [0,0,0];
let time = document.getElementById('displaytime');
const stop = document.getElementById('stop');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
let timer = null;
function stopwatch()
{
    sec++;
    if(sec == 60)
    {
        sec = 0;
        min++;
        if(min == 60)
        {
            min = 0;
            hours++;
        }
    }
    let h = hours < 10 ? '0' + hours : hours;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    time.innerHTML = h + ':' + m + ':' + s;
}
function getstart()
{
    if(timer != null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}
function stoptime()
{
    clearInterval(timer);
}
function resetTime()
{
    clearInterval(timer);
    [sec, min, hours] = [0, 0, 0];
    time.innerHTML = '00:00:00';
}
start.onclick = getstart;
stop.onclick = stoptime;
reset.onclick = resetTime;
