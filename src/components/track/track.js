import "./track.css";
import playImage from "../../assets/play2.svg";
import artistImage from "../../assets/panikknopf-1.jpg";

export function createTrackElement(title, artist) {
  const trackElement = document.createElement("div"); // <div></div>
  trackElement.className = "track";
  //   divElement.innerText = "This is a track"; // <div>This is a track</div>
  const trackCoverElement = document.createElement("img"); // <img>
  trackCoverElement.className = "track__cover";
  trackCoverElement.src = artistImage; // <img src="../../assets/panikknopf.jpg">
  trackCoverElement.alt = `Image of ${artist}`; // <img src="../../assets/panikknopf.jpg" alt="panikknopf logo">

  const trackInfoElement = document.createElement("div"); // <div></div>
  trackInfoElement.className = "track__info";

  const titleElement = document.createElement("h3"); // <h3></h3>
  titleElement.innerText = title; // <h3>Feuer</h3>

  const artistElement = document.createElement("span"); // <span></span>
  artistElement.innerText = artist; // <span>Panikknopf</span>

  const btnElement = document.createElement("button"); // <button></button>
  btnElement.className = "play-btn";
  btnElement.onclick = function () {
    alert("Click!");
  };
  const playElement = document.createElement("img"); // <img>
  playElement.src = playImage; //<img src="../../assets/play-icon.svg">
  playElement.alt = "play"; //<img src="../../assets/play.svg" alt="play">
  btnElement.append(playElement); //<button><img src="..." alt="..."></button>

  trackInfoElement.append(titleElement, artistElement);
  trackElement.append(trackCoverElement, trackInfoElement, btnElement); // <div><img src="../../assets/panikknopf.jpg" alt="panikknopf logo"></div>
  return trackElement;
}
