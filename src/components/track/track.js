import "./track.css";
import playImage from "../../assets/play2.svg";
import pauseImage from "../../assets/pause.svg";
import { createElement } from "../../utils/elements.js";

export function createTrackElement(track) {
  const audioElement = new Audio(track.audioSrc);
  const playActionElement = createElement("img", {
    src: playImage,
  });
  const trackElement = createElement("div", {
    className: "track",
    // src: track.imgSrc,
    // alt: `Image of ${track.artist}`,
    children: [
      createElement("img", {
        className: "track__cover",
        src: track.imgSrc,
        alt: `Image of ${track.artist}`,
      }),
      createElement("div", {
        className: "track__info",
        children: [
          createElement("h3", {
            innerText: track.title,
          }),
          createElement("span", {
            innerText: track.artist,
          }),
        ],
      }),
      createElement("button", {
        className: "play-btn",
        children: [playActionElement],
        onclick: () => {
          if (!audioElement.paused) {
            audioElement.pause();
            setPlayIcon(playActionElement);
          } else {
            audioElement.play();
            setPauseIcon(playActionElement);
          }
        },
      }),
    ],
  });
  return trackElement;
  // const trackElement = document.createElement("div");
  // trackElement.className = "track";
  // const trackCoverElement = document.createElement("img");
  // trackCoverElement.className = "track__cover";
  // trackCoverElement.src = track.imgSrc;
  // trackCoverElement.alt = `Image of ${track.artist}`;

  // const trackInfoElement = document.createElement("div");
  // trackInfoElement.className = "track__info";

  // const titleElement = document.createElement("h3");
  // titleElement.innerText = track.title;

  // const artistElement = document.createElement("span");
  // artistElement.innerText = track.artist;

  // const btnElement = document.createElement("button");
  // btnElement.className = "play-btn";

  // const audioElement = new Audio(track.audioSrc);

  // btnElement.onclick = () => {
  //   if (!audioElement.paused) {
  //     audioElement.pause();
  //     setPlayIcon(playElement);
  //   } else {
  //     audioElement.play();
  //     setPauseIcon(playElement);
  //   }
  // };
  // const playElement = document.createElement("img");
  // playElement.src = playImage;
  // playElement.alt = "play";
  // btnElement.append(playElement);

  // trackInfoElement.append(titleElement, artistElement);
  // trackElement.append(trackCoverElement, trackInfoElement, btnElement);
  // return trackElement;
}

const setPlayIcon = (element) => {
  (element.src = playImage), (element.alt = "Play");
};

const setPauseIcon = (element) => {
  (element.src = pauseImage), (element.alt = "Pause");
};
