"use strict";

const modalbtn = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");

modalbtn.addEventListener("click", function () {
  console.log("a button was clicked");

  modal.classList.toggle("hidden");
});
