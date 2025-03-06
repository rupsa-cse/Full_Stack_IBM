let videoContainer = document.getElementById("video");

let data = JSON.parse(localStorage.getItem("videoData"));
let videoID = data.id.videoId;

async function showData() {
  let box = document.createElement("div");

  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoID}`;

  iframe.height = "400px";
  iframe.width = "80%";
  iframe.setAttribute("allowfullscreen", true);

  let title = document.createElement("p");
  title.innerText = snippet.title;

  let channel_title = document.createElement("p");
  channel_title.innerText = snippet.channelTitle;

  box.append(iframe);
  videoContainer.append(box);
}
