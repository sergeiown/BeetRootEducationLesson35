const listButton = document.querySelector(".list-button");
const windowButton = document.querySelector("#modal-button");
const closeButton = document.querySelector(".close-button");
const trafficLightButton = document.querySelector(".traffic-light-button");

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

localStorage.setItem(
  "storageItem",
  JSON.stringify(playList)
); /* add playlist to local storage as a string */

import * as normal from "./normal.js";

listButton.addEventListener("click", normal.showHideListOfSongs);
windowButton.addEventListener("click", normal.showHideModalWindow);
closeButton.addEventListener("click", normal.showHideModalWindow);
trafficLightButton.addEventListener("click", normal.changeTrafficLightColor);
