import { createTrackElement } from "./track";
import wsdkAudio from "../../assets/01 - Wir Sind Der Knopf.mp3";
import gothicAudio from "../../assets/02 - Gothic.mp3";
import feuerAudio from "../../assets/03 - Feuer.mp3";
import siemAudio from "../../assets/04 - Sex ist eine Macht.mp3";
import samAudio from "../../assets/05 - Sagen aus Mädchen.mp3";
import kdmAudio from "../../assets/06 - Königin der Maden.mp3";
import basAudio from "../../assets/07 - Bock Auf Sex.mp3";
import leichenbrautAudio from "../../assets/08 - Leichenbraut.mp3";
import freiAudio from "../../assets/09 - Frei.mp3";
import hasAudio from "../../assets/10 - Hoffnung auf Schmerz.mp3";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

const gothic2 = {
  title: "Gothic",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: gothicAudio,
};

const feuer2 = {
  title: "Feuer",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: feuerAudio,
};

const sam2 = {
  title: "Sagen Aus Mädchen",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: samAudio,
};

const wsdk2 = {
  title: "Wir Sind Der Knopf",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: wsdkAudio,
};

const siem2 = {
  title: "Sex Ist Eine Macht",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: siemAudio,
};

const kdm2 = {
  title: "Königin Der Maden",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: kdmAudio,
};

const bas2 = {
  title: "Bock Auf Sex",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: basAudio,
};

const leichenbraut2 = {
  title: "Leichenbraut",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: leichenbrautAudio,
};

const frei2 = {
  title: "Frei",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: freiAudio,
};

const has2 = {
  title: "Hoffnung Auf Schmerz",
  artist: "Panikknopf",
  imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
  audioSrc: hasAudio,
};

const panikknopf = [
  wsdk2,
  gothic2,
  feuer2,
  siem2,
  sam2,
  kdm2,
  bas2,
  leichenbraut2,
  frei2,
  has2,
];

export const wirSindDerKnopf = () => createTrackElement(panikknopf[0]);
export const gothic = () => createTrackElement(panikknopf[1]);
export const feuer = () => createTrackElement(panikknopf[2]);
export const sexIstEineMacht = () => createTrackElement(panikknopf[3]);
export const sagenAusMädchen = () => createTrackElement(panikknopf[4]);
export const königinDerMaden = () => createTrackElement(panikknopf[5]);
export const bockAufSex = () => createTrackElement(panikknopf[6]);
export const leichenbraut = () => createTrackElement(panikknopf[7]);
export const frei = () => createTrackElement(panikknopf[8]);
export const hoffnungAufSchmerz = () => createTrackElement(panikknopf[9]);

export const album = () => {
  const container = document.createElement("div");
  panikknopf.forEach((track) => {
    const trackElement = createTrackElement(track);
    container.append(trackElement);
  });

  return container;
};
