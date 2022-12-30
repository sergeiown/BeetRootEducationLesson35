function showListOfSongs() {}
const sourceArray = JSON.parse(localStorage.storageItem);

const songsList = sourceArray.map(
  (item) => item["song"]
); /* make array of songs only */

const uniqSortedSongsList = Array.from(
  new Set(songsList)
).sort(); /* make array of sorted unique songs */

let liValues = "";
uniqSortedSongsList.forEach(
  (elem) => (liValues += `<li>${elem}</li>`)
); /* make <ol class"list"> inner tags from the array of sorted unique songs */

document.querySelector(".list").innerHTML = liValues;

export {};
