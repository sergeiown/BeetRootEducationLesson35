function showHideListOfSongs() {
  const sourceArray = JSON.parse(localStorage.storageItem);
  const list = document.querySelector(".list");
  const listButton = document.querySelector(".list-button");

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

  if (listButton.innerHTML === "show list") {
    list.innerHTML = liValues;
    listButton.innerHTML = "hide list";
  } else if (listButton.innerHTML === "hide list") {
    list.innerHTML = "";
    listButton.innerHTML = "show list";
  }
}

function showHideModalWindow() {
  const modalWindow = document.querySelector("#modal");
  const windowButton = document.querySelector("#modal-button");

  modalWindow.classList.toggle("modal-window-content");
  windowButton.classList.toggle("modal-window-button");
}

export { showHideListOfSongs, showHideModalWindow };
