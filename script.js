// AIzaSyAxtJTYYHk9g03iEJ0cUazBvlNqU7qA7Ng
// const videoCardContainer=document.querySelector('.video-container');

// let api_key="AIzaSyAxtJTYYHk9g03iEJ0cUazBvlNqU7qA7Ng";
// let video_http="https://www.googleapis.com/youtube/v3/videos?";
// let channel_http="https://www.googleapis.com/youtube/v3/channels?";

// fetch(video_http + new URLSearchParams({
//     key:api_key,
//     part:'snippet',
//     chart:'mostPopular',
//     maxResults:50,
//     regionCode:'IN',
// }))
// .then(res=>res.json())
// .then(data=>{
//     // console.log(data);
//     data.items.forEach(item => {
//         getChannelIcon(item);
//     })
// })
// .catch(err => console.log(err));

// const getChannelIcon=(video_data)=>{
//     fetch(channel_http + new URLSearchParams({
//     key: api_key,
//     part: 'snippet',
//     id: video_data.snippet.channelId
//     }))
//     .then(res=>res.json())
//     .then(data => {
//         video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
//         makeVideoCard(video_data);
//     })
// }

// const makeVideoCard = (data) => {
//     videoCardContainer.innerHTML += `
//     <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
//         <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
//         <div class="content">
//             <img src="${data.channelThumbnail}" class="channel-icon" alt="">
//             <div class="info">
//                 <h4 class="title">${data.snippet.title}</h4>
//                 <p class="channel-name">${data.snippet.channelTitle}</p>
//             </div>
//         </div>
//     </div>
//     `;
// }


// //searchbar
// const searchInput=document.querySelector('.search-bar');
// const searchBtn=document.querySelector('.search-btn');
// let searchLink="https://www.youtube.com/results?search_query=";

// searchBtn.addEventListener('click', ()=>{
//     if(searchInput.value.length){
//         location.href=searchLink+searchInput.value;
//     }
// })



//from class
// const YOUR_API_KEY="AIzaSyAxtJTYYHk9g03iEJ0cUazBvlNqU7qA7Ng";

import YOUR_API_KEY from "./API_CONSTANTS.js"
const video_https="https://www.googleapis.com/youtube/v3/videos?";
const videoCardContainer=document.querySelector(".video-container")
let channel_https="https://www.googleapis.com/youtube/v3/channels?";


const numberOfVideosONInitialLoad=20;
const generateQueryParam=new URLSearchParams({
    key:YOUR_API_KEY,
    part:"snippet, contentDetails",
    chart:"mostPopular",
    maxResults:numberOfVideosONInitialLoad,
    regionCode:"IN",    
})

// console.log(video_https+generateQueryPram)
//firstttttttttttttttttttttttttt //error
// fetch(video_https + generateQueryParam)
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data)
//         data.items.forEach((item) => {
//             getChannelIcon(item);
//         })
//     })
//     .catch((err) => console.log(err));

// const getChannelIcon = (video_data)=>{
//     fetch(channel_http + new URLSearchParams({
//         key : YOUR_API_KEY,
//         part : "snippet",
//         id : video_data.snippet.channelId
//     }))
// }
//enddddddddddddddddddddddddddddddddddddddddddd error


fetch(video_https + generateQueryParam)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        data.items.forEach((item) => {
            getChannelIcon(item);
        })
    })
    .catch((err) => console.log(err));

const getChannelIcon = (video_data)=>{
    fetch(channel_https + new URLSearchParams({
        key : YOUR_API_KEY,
        part : "snippet",
        id : video_data.snippet.channelId,
    })).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            video_data.channelThumbnail=data.items[0].snippet.thumbnails.high.url;
            makeVideoCard(video_data);
        })
        .catch((err)=>console.log(err));
} 


const makeVideoCard=(data)=>{
    const videoCard=document.createElement("div");
    videoCard.classList.add("video");
    videoCard.addEventListener("click",()=>{
        window.location.href=`video.html?id=${data.id}`;
        // window.location.href="video.html?id="+data.id;
    })
    videoCard.innerHTML=  `
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="thumbnail">

        <div class="content">
        <img src="${data.snippet.thumbnails.high.url}" class="channel-icon" alt="">
        <div>
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>
        </div>
    `

    videoCardContainer.appendChild(videoCard);
}
//----------------------------------------------------------------------------------------------------------------

// import YOUR_API_KEY from "./API_CONSTANTS.js";

// const videoContainer = document.querySelector(".video-container");
// const video_https = "https://www.googleapis.com/youtube/v3/videos?";
// let channel_https = "https://www.googleapis.com/youtube/v3/channels?";

// const numberOfVideosInInitialLoad = 20;
// const generateQueryParam = new URLSearchParams({
//     key : YOUR_API_KEY,
//     part : "snippet, contentDetails",
//     chart : "mostPopular",
//     maxResults : numberOfVideosInInitialLoad,
//     regionCode : "IN",
// })

// // console.log(video_https + generateQueryParam);
// fetch(video_https + generateQueryParam)
//     .then((res) => res.json())
//     .then((data) =>{
//         console.log(data)
//         data.items.forEach((item) => {
//             getChannelIcon(item);
//         })
//     })
//     .catch((err) => console.log(err));

// const getChannelIcon = (video_data)=>{
//     fetch(channel_https + new URLSearchParams({
//         key : YOUR_API_KEY,
//         part : "snippet",
//         id : video_data.snippet.channelId,
//     })).then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//             video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//             makeVideoCard(video_data)
//         })
//         .catch((err)=>console.log(err));
// } 

// const makeVideoCard = (data) =>{
//     const videoCard = document.createElement("div");
//     videoCard.classList.add("video");
//     videoCard.addEventListener("click",()=>{
//         window.location.href="";
//     })
//     videoCard.innerHTML = `
//         <img src="${data.snippet.thumbnails.default.url}" class="thumbnail" alt="">
//     `
//     videoContainer.appendChild(videoCard);
// } 