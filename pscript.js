console.log("Hello World")

var change
let play=document.getElementById('play')
let songindex = 1
let audio = new Audio('Pop/1.mp3')
let previous=document.getElementById("prev")
let songname=document.getElementById("mainsongname")
let next=document.getElementById('next')
let main = document.getElementById('main')
let progress = document.getElementById('progressbar')
let songItems = Array.from(document.getElementsByClassName('songitem')); 
let itemplay = document.getElementsByClassName("songitemplay")
let songs = [
    { SongName: "4x4 (RiskyjaTT (1)", filepath: "Pop/1.mp3", coverpath: "covers/1.jpg" },
    { SongName: "3 Peg PagalWorld", filepath: "Pop/2.mp3", coverpath: "covers/2.jpg" },
    { SongName: "Amrinder Gill - Yaarian Ft Dr Zeus Official Music Video", filepath: "Pop/3.mp3", coverpath: "covers/3.jpg" },
    { SongName: "Celebrity Killer (RiskyjaTT (1) ", filepath: "Pop/4.mp3", coverpath: "covers/4.jpg" },
    { SongName: " GODSPEED -Full Song", filepath: "Pop/5.mp3", coverpath: "covers/5.jpg" },
    { SongName: "Mi Amor- Full Song", filepath: "Pop/6.mp3", coverpath: "covers/6.jpg" },
    { SongName: "Never Fold Sidhu- Full Song", filepath: "Pop/7.mp3", coverpath: "covers/7.jpg" },
    { SongName: "Rubicorn Drill- Full Song", filepath: "Pop/8.mp3", coverpath: "covers/8.jpg" },
    { SongName: "Still Rollin - Full Song (pagalworld)", filepath: "Pop/9.mp3", coverpath: "covers/9.jpg" },
    { SongName: "White Brown Black - Full Song", filepath: "Pop/10.mp3", coverpath: "covers/10.jpg" },
  
]

songItems.forEach((element,i)=> {
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("songname")[0].innerText=songs[i].SongName

})

main.addEventListener('click',()=>{
    
    Array.from(document.getElementsByClassName("songitem")).forEach((element)=>{

        let c = Array.from(element.getElementsByClassName("songname")).forEach((i)=>
        { 
            let down = document.getElementById("mainsongname").innerText
            let b = i.innerText

let t = Array.from(document.getElementsByClassName("songitemplay")).forEach((ele)=>{

                if(b==down)
                {
                    if(main.className=="far fa-3x fa-pause-circle")
                    {
                        if(ele.className=="far songitemplay fa-2x fa-pause-circle")
                        {
                            ele.classList.remove("fa-pause-circle")
                            ele.classList.add("fa-play-circle")
                        }                     
                    }                   
                }
})
        })
    })
    if(audio.paused){
        audio.play()
       main.classList.remove("fa-play-circle")
       main.classList.add("fa-pause-circle")
       Array.from(document.getElementsByClassName("songitemplay"))[songindex-1].classList.remove("fa-play-circle")
       Array.from(document.getElementsByClassName("songitemplay"))[songindex-1].classList.add("fa-pause-circle")
      play.style.opacity="1"

    }
    else {
        audio.pause()
        main.classList.remove("fa-pause-circle");
        main.classList.add("fa-play-circle")
        play.style.opacity="0"
    } 
})
audio.addEventListener("timeupdate",()=>{
    p=parseInt((audio.currentTime/audio.duration)*100)
    progress.value=p
})
progress.addEventListener("change",()=>{
audio.currentTime=progress.value*audio.duration/100
})
const Allplay = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
element.addEventListener("click",(e)=> {

   


    Allplay()
    songindex = parseInt((e.target.id))
    audio.src=`Pop/${songindex}.mp3`
    songname.innerText=songs[songindex-1].SongName
    if(e.target.className=="far songitemplay fa-2x fa-play-circle") {
        
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")

        progress.currentTime=0
        audio.src=`Pop/${songindex}.mp3`
        songname.innerText=songs[songindex-1].SongName
        audio.play()
        play.style.opacity="1"
        main.classList.remove("fa-play-circle")
        main.classList.add("fa-pause-circle")
    }



})
})

next.addEventListener("click", ()=> {

if(songindex>=10) {
    songindex=1
}
else {
    songindex+=1
}
progress.currentTime=0
songname.innerText=songs[songindex-1].SongName
        audio.src=`Pop/${songindex}.mp3`
        audio.play()
        play.style.opacity="1"
        main.classList.remove("fa-play-circle")
        main.classList.add("fa-pause-circle")
        let a = document.getElementById(songindex)
        // console.log(a.className)
        Allplay()
a.classList.remove("fa-play-circle")
a.classList.add("fa-pause-circle")

})

previous.addEventListener("click", ()=> {

    if(songindex<=1) {
        songindex=10
    }
    else {
        songindex-=1
    }
    progress.currentTime=0
    songname.innerText=songs[songindex-1].SongName
            audio.src=`Pop/${songindex}.mp3`
            let a = document.getElementById(songindex)
            audio.play()
            play.style.opacity="1"
            main.classList.remove("fa-play-circle")
            main.classList.add("fa-pause-circle")
            Allplay()
            a.classList.remove("fa-play-circle")
            a.classList.add("fa-pause-circle")
    })


  
