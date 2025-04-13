let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlBtn = document.getElementById('ctrlBtn');

song.onloadedmetadata = function()
{
    progress.max = song.duration;
    progress.value = song.currentTime;
}
const icon = ctrlBtn.querySelector('i'); 
function playPause()
{
    if(icon.classList.contains('bi-pause-fill'))
    {
        song.pause();
        icon.classList.remove('bi-pause-fill');
        icon.classList.add('bi-play-fill');
    }
    else
    {
        song.play();
        icon.classList.add('bi-pause-fill');
        icon.classList.remove('bi-play-fill');
    }
}
ctrlBtn.onclick = playPause;

if(song.play())
{
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = () =>
{
    song.play();
    song.currentTime = progress.value;
    icon.classList.add('bi-pause-fill');
    icon.classList.remove('bi-play-fill');
}