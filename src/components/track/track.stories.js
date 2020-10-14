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

export const gothic = () =>
  createTrackElement({
    title: "Gothic",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: gothicAudio,
  });
export const feuer = () =>
  createTrackElement({
    title: "Feuer",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: feuerAudio,
  });
export const sagenAusMädchen = () =>
  createTrackElement({
    title: "Sagen Aus Mädchen",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: samAudio,
  });
export const wirSindDerKnopf = () =>
  createTrackElement({
    title: "Wir Sind Der Knopf",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: wsdkAudio,
  });
export const sexIstEineMacht = () =>
  createTrackElement({
    title: "Sex Ist Eine Macht",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: siemAudio,
  });
export const königinDerMaden = () =>
  createTrackElement({
    title: "Königin Der Maden",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: kdmAudio,
  });
export const bockAufSex = () =>
  createTrackElement({
    title: "Bock Auf Sex",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: basAudio,
  });
export const leichenbraut = () =>
  createTrackElement({
    title: "Leichenbraut",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: leichenbrautAudio,
  });
export const frei = () =>
  createTrackElement({
    title: "Frei",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: freiAudio,
  });
export const hoffnungAufSchmerz = () =>
  createTrackElement({
    title: "Hoffnung Auf Schmerz",
    artist: "Panikknopf",
    imgSrc: "https://getmetal.club/uploads/posts/2019-11/1574658277_cover.jpg",
    audioSrc: hasAudio,
  });

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
  audioSrc: gothicAudio,
};

const panikknopf = [gothic2, feuer2];

export const amAnfangGeilerAlsAmEndeGedacht = () =>
  createTrackElement(panikknopf);
