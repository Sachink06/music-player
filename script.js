var arr = [
    { songName: "Arjun Velly", url: "./songs/Arjan Vailly - ANIMAL.mp3", img: "./img/animal.webp"},
    { songName: "Hua Main", url: "./songs/Hua Main - ANIMAL.mp3", img: "./img/animal-2023_167264941510.webp"},
    { songName: "Jamal Kudu", url: "./songs/Abrars Entry Jamal Kudu - ANIMAL.mp3", img: "./img/animal.webp"},
    { songName: "Kashmir", url: "./songs/Kashmir.mp3", img: "./img/animal.webp"},
    { songName: "Laado", url: "./songs/Laado.mp3", img: "./img/laado.webp"},
    { songName: "Pehle Bhi Main", url: "./songs/Pehle Bhi Main.mp3", img: "./img/animal.webp"},
]

var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()
var selectedSong = 0

function mainFunction() {
    var songs = ""
    arr.forEach(function(elem,index) {
        songs += `<div class="song-card" id=${index}>
                    <div id="part1">
                        <img src=${elem.img} alt="">
                        <h3>${elem.songName}</h3>
                    </div>
                    <h6>3.30</h6>
                </div>`
    
            })
            allSongs.innerHTML = songs
            
            audio.src = arr[selectedSong].url
            poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click", function(dets) {
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    mainFunction()
    audio.play()
})

var flag = 0
play.addEventListener("click",function(){
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click",function(){
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
        backward.style.opacity = 1
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    }else{
        forward.style.opacity = 0.3
        backward.style.opacity = 1
    }
})

backward.addEventListener("click",function(){
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
        forward.style.opacity = 1
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    }else{
        backward.style.opacity = 0.3
        forward.style.opacity = 1
        
    }
})