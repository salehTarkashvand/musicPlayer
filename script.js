// add music to array (title , cover , audio)

const musics = [
    {
        name : "R.I.P. SCREW" ,

        cover : "covers/5109df95c15114aee5f18b36824d1f60.jpg",
        audio : new Audio("musics/R.I.P. SCREW.mp3")

    }
    ,
    {
        name : "tarik tarin" ,

        cover : "covers/tarik-tarin-cover.jpeg",

        audio : new Audio("musics/Tarik Tarin.mp3")

    }
     ,
    {
        name : "Inwood Hill Park" ,

        cover : "covers/6lack_4_photo-credit_jack-mckain22_custom-da791cd2ed8687a25733affc1e09ea79514d2034-s1100-c50.jpg",

        audio : new Audio("musics/Inwood Hill Park.mp3")

    }
    
]

// select elements

let musicName = document.querySelector("#music-name")
let musicCover = document.querySelector("#music-cover")
let musicTime = document.querySelector("#music-time")
let playBtn = document.querySelector("#play-btn")
let preBtn = document.querySelector("#pre-btn")
let nextBtn = document.querySelector("#next-btn")
let icon = playBtn.querySelector("#icon")
let play = document.querySelector(".play")


// select musics

let currentmusic = 0 ;
let audio = musics[currentmusic].audio
musicCover.src = musics[currentmusic].cover
musicName.innerText = musics[currentmusic].name



// ADD events




// set max range audio *

audio.addEventListener("canplay" , (e)=>{
    musicTime.max = audio.duration
})



// handle range with time music

audio.addEventListener("timeupdate" , (e)=>{
    // range value = audio time 
    musicTime.value = audio.currentTime

})


//handle time music to range

musicTime.addEventListener("input", (e)=>{
    // audio time = range value
    audio.currentTime = musicTime.value
})



// play music

playBtn.addEventListener("click",(e)=>{
    if(audio.paused ){

        audio.play()
        musicCover.style.animationPlayState ="running"
        icon.className = "icon uil uil-pause"
       
    }else{
    
        audio.pause()
        musicCover.style.animationPlayState ="paused"
        icon.className = "icon uil uil-play"
       
    
    }    
})

// next music

preBtn.addEventListener("click" , ()=>{
    changeMusic("per")
})
nextBtn.addEventListener("click" , ()=>{
    changeMusic("next")
})

function changeMusic (state){
    audio.pause()
    musicTime.value = 0
    play.className = "play"
    musicCover.style.animationPlayState ="paused"
    audio.currentTime = 0 ;
    if(state=="next"){
        if(currentmusic == musics.length - 1 )
        {currentmusic= 0} 
        else {currentmusic += 1}

    }else{
        if(currentmusic == 0){
            currentmusic = musics.length - 1
        }else{
            currentmusic -= 1
        }
    }
    audio = musics[currentmusic].audio
    musicCover.src = musics[currentmusic].cover
    musicName.innerText = musics[currentmusic].name
}

