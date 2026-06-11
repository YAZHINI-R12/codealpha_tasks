const songs = [
{
    title: "Believer",
    artist: "Imagine Dragons",
    src: "songs/Believer.mp3"
},
{
    title: "Faded",
    artist: "Alan Walker",
    src: "songs/Faded.mp3"
},
{
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "songs/Perfect.mp3"
}
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const title = document.getElementById("title");
const artist = document.getElementById("artist");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTimeDisplay =
document.getElementById("currentTime");

const durationDisplay =
document.getElementById("duration");

const playlist =
document.getElementById("playlist");

let songIndex = 0;

function loadSong(index){

    audio.src = songs[index].src;

    title.textContent =
    songs[index].title;

    artist.textContent =
    songs[index].artist;

    document
    .querySelectorAll("#playlist li")
    .forEach(item =>
        item.classList.remove("active")
    );

    const current =
    document.querySelectorAll("#playlist li")[index];

    if(current){
        current.classList.add("active");
    }
}

function playSong(){

    audio.play();

    playBtn.textContent = "⏸";
}

function pauseSong(){

    audio.pause();

    playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {

    if(audio.paused){
        playSong();
    }else{
        pauseSong();
    }
});

nextBtn.addEventListener("click", () => {

    songIndex++;

    if(songIndex >= songs.length){
        songIndex = 0;
    }

    loadSong(songIndex);
    playSong();
});

prevBtn.addEventListener("click", () => {

    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songIndex);
    playSong();
});

audio.addEventListener("timeupdate", () => {

    if(audio.duration){

        progress.value =
        (audio.currentTime /
        audio.duration) * 100;

        let currentMinutes =
        Math.floor(audio.currentTime / 60);

        let currentSeconds =
        Math.floor(audio.currentTime % 60);

        let durationMinutes =
        Math.floor(audio.duration / 60);

        let durationSeconds =
        Math.floor(audio.duration % 60);

        currentTimeDisplay.textContent =
        `${currentMinutes}:${currentSeconds
        .toString()
        .padStart(2,"0")}`;

        durationDisplay.textContent =
        `${durationMinutes}:${durationSeconds
        .toString()
        .padStart(2,"0")}`;
    }
});

progress.addEventListener("input", () => {

    if(audio.duration){
        audio.currentTime =
        (progress.value / 100)
        * audio.duration;
    }
});

volume.addEventListener("input", () => {

    audio.volume = volume.value;
});

audio.addEventListener("ended", () => {

    songIndex++;

    if(songIndex >= songs.length){
        songIndex = 0;
    }

    loadSong(songIndex);
    playSong();
});

songs.forEach((song,index) => {

    const li =
    document.createElement("li");

    li.textContent =
    `${song.title} - ${song.artist}`;

    li.addEventListener("click", () => {

        songIndex = index;

        loadSong(songIndex);

        playSong();
    });

    playlist.appendChild(li);
});

loadSong(songIndex);
