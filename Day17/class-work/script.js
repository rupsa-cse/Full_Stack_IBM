let API_KEY = "AIzaSyAUv4pzutVCJFzxPrra36ToS0opbu2A2KQ";
let search_term = document.getElementById("query").value || "University";
let videoContainer = document.getElementById('video-data');

async function getData() {
  try {
    let data =
      await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}
`);
    let response = await data.json();
    console.log(data);
    console.log(response.items);
    showVideocards(response.items);
  } catch (error) {
    console.log("Error");
  }
}
getData();

async function showVideocards(array) {
    console.log(array)
    // document.getElementById("loading").style.display = "none";
    // console.log(array[0].snippet);
    array.forEach(({snippet,id}) => {
        let videoBox = document.createElement('div')
        videoBox.className  = "videos";
        
        let img = document.createElement('img')
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = snippet.title;

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle

        videoBox.append(img,title,channel_title);
        videoContainer.append(videoBox);

        videoBox.onclick = (()=>{
            let data = {
                snippet,id
            }
            localStorage.setItem("video-data",JSON.stringify(data));
            window.location.href = "video"
        })
    });
}
{
  /* <iframe width="928" height="522" src="https://www.youtube.com/embed/ByY1M-Q1ltA" title="VIRAT KOHLI Show in Semi Finals | IND vs AUS VLOG 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}
