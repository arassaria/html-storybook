import { createButtonElement } from "./menubtns.js";
import backwardsButton from "../../assets/backwards.svg";
import forwardButton from "../../assets/forwards.svg";
import playlistIcon from "../../assets/playlist.svg";
import shuffleIcon from "../../assets/shuffle.svg";
import repeatIcon from "../../assets/repeat.svg";
import eqIcon from "../../assets/fader.svg";
import favoritesIcon from "../../assets/heart.svg";

export default {
  title: "Components/Menubtns",
  parameters: { layout: "centered" },
};

const backwardsbtn = {
  title: "Backwards",
  imgSrc: backwardsButton,
};

const forwardbtn = {
  title: "Forward",
  imgSrc: forwardButton,
};

const playlistbtn = {
  title: "Playlist",
  imgSrc: playlistIcon,
  name: "Playlist",
};

const shufflebtn = {
  title: "Shuffle",
  imgSrc: shuffleIcon,
  name: "Shuffle",
};

const repeatbtn = {
  title: "Repeat",
  imgSrc: repeatIcon,
  name: "Repeat",
};

const eqbtn = {
  title: "EQ",
  imgSrc: eqIcon,
  name: "EQ",
};

const favoritesbtn = {
  title: "Favorites",
  imgSrc: favoritesIcon,
  name: "Favorites",
};

export const backwards = () => createButtonElement(backwardsbtn);
export const forward = () => createButtonElement(forwardbtn);
export const playlist = () => createButtonElement(playlistbtn);
export const shuffle = () => createButtonElement(shufflebtn);
export const repeat = () => createButtonElement(repeatbtn);
export const eq = () => createButtonElement(eqbtn);
export const favorites = () => createButtonElement(favoritesbtn);
