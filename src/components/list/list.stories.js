import "./list.css";
import listThemes from "./themes.html";
import listRingtone from "./ringtone.html";
import listSleep from "./sleep.html";
import listEq from "./eq.html";
import listDrive from "./drive.html";
import listHiddenFolders from "./hidden-folders.html";
import listScanMedia from "./scan-media.html";

export default { title: "Components/List" };

export const themes = () => listThemes;
export const ringtone = () => listRingtone;
export const sleep = () => listSleep;
export const eq = () => listEq;
export const drive = () => listDrive;
export const hiddenFolders = () => listHiddenFolders;
export const scanMedia = () => listScanMedia;
