import YOUR_API_KEY from "./API_CONSTANTS.js"; 

// console.log(new URLSearchParams(window.location.search));


// console.log(window.location.href);
const urlParams=new URLSearchParams(window.location.search);
const videoId=urlParams.get("id");
console.log(videoId);

const videoPlayerContainer=document.querySelector("#video-player");
const video_http="https://www.googleapis.com/youtube/v3/videos?"

if(videoId){
    fetch(video_http + new URLSearchParams({
        key:YOUR_API_KEY,
        part:"snippet",
        id:videoId,
    })).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        videoPlayerContainer.innerHTML=`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" ></iframe>
        `
        
    })
    .catch((err)=>console.log(err))
}