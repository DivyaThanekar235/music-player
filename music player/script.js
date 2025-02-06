let progress = document.getElementById("progress");
let song = document.getElementById("song");
let cntrIcon = document.getElementById("cntrIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(cntrIcon.classList.contains("fa-pause")){
        song.pause();
        cntrIcon.classList.remove("fa-pause");
        cntrIcon.classList.add("fa-play");
    }
    else{
        song.play();
        cntrIcon.classList.add("fa-pause");
        cntrIcon.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
        cntrIcon.classList.add("fa-pause");
        cntrIcon.classList.remove("fa-play");
}