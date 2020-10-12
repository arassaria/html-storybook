import playImage from "../../assets/play2.svg";
import panikknopfImage from "../../assets/panikknopf.jpg";

export function createTrackElement() {
  const divElement = document.createElement("div"); // <div></div>
  //   divElement.innerText = "This is a track"; // <div>This is a track</div>
  const imgElement = document.createElement("img"); // <img>
  imgElement.src = panikknopfImage; // <img src="../../assets/panikknopf.jpg">
  imgElement.alt = "panikknopf logo"; // <img src="../../assets/panikknopf.jpg" alt="panikknopf logo">

  const h3Element = document.createElement("h3"); // <h3></h3>
  h3Element.innerText = "Feuer"; // <h3>Feuer</h3>

  const spanElement = document.createElement("span"); // <span></span>
  spanElement.innerText = "Panikknopf"; // <span>Panikknopf</span>

  const btnElement = document.createElement("button"); // <button></button>
  const playElement = document.createElement("img"); // <img>
  playElement.src = playImage; //<img src="../../assets/play-icon.svg">
  playElement.alt = "play"; //<img src="../../assets/play.svg" alt="play">
  btnElement.append(playElement); //<button><img src="..." alt="..."></button>

  divElement.append(imgElement); // <div><img src="../../assets/panikknopf.jpg" alt="panikknopf logo"></div>
  divElement.append(h3Element); // <div><h3>Feuer</h3></div>
  divElement.append(spanElement); // <div><span>Panikknopf</span></div>
  divElement.append(btnElement); //<div><button></button></div>
  return divElement;
}
