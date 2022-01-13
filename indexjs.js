let play=document.getElementById("play");
let sname=document.getElementById("sname");
let aname=document.getElementById("aname");
let index=0;
// let song=document.getElementsByClassName("songs");
play.addEventListener('click',()=>{
    if(play.innerHTML==="play")
    {
        // audioElement.play();
        play.innerHTML="pause";
        play.classList.add("active");
        sname.classList.add("active");
    }
    else{
        // audioElement.pause();
        play.innerHTML="play";
        play.classList.remove("active");
        sname.classList.remove("active");
    }
});

// Initialize

let songIndex=0;
let slide=document.getElementById("slider");
let audioElement = new Audio("assets/songs/Arizona Zervas - Roxanne.mp3");
let next=document.getElementById("next");
let back=document.getElementById("back");
let songs = [
    {songName:"Nucleya  - Bacardi Drop", filePath:"assets/songs/Nucleya  - Bacardi Drop.mp3", coverPath:"images/Nucleya  - Bacardi Drop.jpg" },
    {songName:"Alec Benjamin - Let Me Down Slowly", filePath:"assets/songs/Alec Benjamin - Let Me Down Slowly.mp3", coverPath:"images/Alec Benjamin - Let Me Down Slowly.jpg" },
    {songName:"Arizona Zervas - Roxanne", filePath:"assets/songs/Arizona Zervas - Roxanne.mp3", coverPath:"images/Arizona Zervas - Roxanne.jpg" },
    {songName:"Ed Sheeran - Thinking Out Loud", filePath:"assets/songs/Ed Sheeran - Thinking Out Loud.mp3", coverPath:"images/Ed Sheeran - Thinking Out Loud.jpg" },
    {songName:"Maroon 5 - Memories", filePath:"assets/songs/Maroon 5 - Memories.mp3", coverPath:"images/Maroon 5 - Memories.jpg" },
    {songName:"Post Malone, Swae Lee - Sunflower", filePath:"assets/songs/Post Malone, Swae Lee - Sunflower.mp3", coverPath:"images/Post Malone, Swae Lee - Sunflower.jpg" },
    {songName:"Powfu - Death Bed", filePath:"assets/songs/Powfu - Death Bed.mp3", coverPath:"images/Powfu - Death Bed.jpg" },
    {songName:"Trevor Daniel - Falling", filePath:"assets/songs/Trevor Daniel - Falling.mp3", coverPath:"images/Trevor Daniel - Falling.jpg" }
]

// handle play/pause
play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();}
    else{
    audioElement.pause();}

    if(audioElement.currentTime===audioElement.duration || slide.value===100){
        next();
        console.log("next");
        audioElement.play();
    }
})



audioElement.addEventListener('timeupdate', ()=>{
    // console.log("timeupdate");
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    slide.value=progress;
})

slide.addEventListener('change',()=>{
    audioElement.currentTime=slide.value*audioElement.duration/100;
});

Array.from(document.getElementsByClassName("songs")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = parseInt(e.target.id);
        audioElement.src = songs[index].filePath;
        console.log(audioElement.src);
        audioElement.play();
        if(play.innerHTML==="play")
    {
        play.innerHTML="pause";
        play.classList.add("active");
        sname.classList.add("active");
    }
   

    })

});

Array.from(document.getElementsByClassName("songs")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = parseInt(e.target.id);
        let i=songs[index].songName.indexOf("-");
        s=songs[index].songName.substring(i+2,songs[index].songName.length);
        console.log(s);
        a=songs[index].songName.substring(0,i);
        console.log(a);
        sname.innerHTML=s;
        aname.innerHTML=a;
    })

});

document.getElementById("next").addEventListener('click',function next(){
    if(index>=8){
        index=0;
    }
    else{
        audioElement.src = songs[index].filePath;
        audioElement.play();
        
        let i=songs[index].songName.indexOf("-");
        s=songs[index].songName.substring(i+2,songs[index].songName.length);
        a=songs[index].songName.substring(0,i);
        sname.innerHTML=s;
        aname.innerHTML=a;
        if(play.innerHTML==="play")
    {
        play.innerHTML="pause";
        play.classList.add("active");
        sname.classList.add("active");
    }
    index+=1;
    }
})

document.getElementById("back").addEventListener('click',()=>{
    if(index<=0){
        index=8;
    }
    else{
        audioElement.src = songs[index].filePath;
        audioElement.play();
        
        let i=songs[index].songName.indexOf("-");
        s=songs[index].songName.substring(i+2,songs[index].songName.length);
        a=songs[index].songName.substring(0,i);
        sname.innerHTML=s;
        aname.innerHTML=a;
        if(play.innerHTML==="play")
    {
        play.innerHTML="pause";
        play.classList.add("active");
        sname.classList.add("active");
    }
    index-=1;
    }
})

if(audioElement.currentTime===audioElement.duration || slide.value===100){
    next();
    console.log("next");
    audioElement.play();
}