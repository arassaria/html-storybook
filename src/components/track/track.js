import "./track.css";
import playImage from "../../assets/play2.svg";
import pauseImage from "../../assets/pause.svg";

export function createTrackElement(track) {
  const trackElement = document.createElement("div");
  trackElement.className = "track";
  const trackCoverElement = document.createElement("img");
  trackCoverElement.className = "track__cover";
  trackCoverElement.src = track.imgSrc;
  trackCoverElement.alt = `Image of ${track.artist}`;

  const trackInfoElement = document.createElement("div");
  trackInfoElement.className = "track__info";

  const titleElement = document.createElement("h3");
  titleElement.innerText = track.title;

  const artistElement = document.createElement("span");
  artistElement.innerText = track.artist;

  const btnElement = document.createElement("button");
  btnElement.className = "play-btn";

  const pauseAudio = () => {
    (playElement.src = playImage),
      (playElement.alt = "Play"),
      audioElement.pause();
  };

  const playAudio = () => {
    (playElement.src = pauseImage),
      (playElement.alt = "Pause"),
      audioElement.play();
  };

  const audioElement = new Audio(track.audioSrc);

  let isPlaying = false;
  btnElement.onclick = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
    isPlaying = !isPlaying;
  };
  const playElement = document.createElement("img");
  playElement.src = playImage;
  playElement.alt = "play";
  btnElement.append(playElement);

  trackInfoElement.append(titleElement, artistElement);
  trackElement.append(trackCoverElement, trackInfoElement, btnElement);
  return trackElement;
}
