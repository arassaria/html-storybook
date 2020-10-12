import playImage from "../../assets/play2.svg";
import panikknopfImage from "../../assets/panikknopf.jpg";
import "./track.css";

export function createTrackElement() {
  const divElement = document.createElement("div"); // <div></div>
  divElement.classList.add("track");
  //   divElement.innerText = "This is a track"; // <div>This is a track</div>
  const imgElement = document.createElement("img"); // <img>
  imgElement.classList.add("band");
  imgElement.src = panikknopfImage; // <img src="../../assets/panikknopf.jpg">
  imgElement.alt = "panikknopf logo"; // <img src="../../assets/panikknopf.jpg" alt="panikknopf logo">

  const div2Element = document.createElement("div"); // <div></div>

  const h3Element = document.createElement("h3"); // <h3></h3>
  h3Element.innerText = "Feuer"; // <h3>Feuer</h3>

  const spanElement = document.createElement("span"); // <span></span>
  spanElement.innerText = "Panikknopf"; // <span>Panikknopf</span>

  const btnElement = document.createElement("button"); // <button></button>
  btnElement.classList.add("play-btn");
  const playElement = document.createElement("img"); // <img>
  playElement.src = playImage; //<img src="../../assets/play-icon.svg">
  playElement.alt = "play"; //<img src="../../assets/play.svg" alt="play">
  btnElement.append(playElement); //<button><img src="..." alt="..."></button>

  div2Element.append(h3Element);
  div2Element.append(spanElement);
  divElement.append(imgElement); // <div><img src="../../assets/panikknopf.jpg" alt="panikknopf logo"></div>
  divElement.append(div2Element);
  divElement.append(btnElement); //<div><button></button></div>
  return divElement;
}
