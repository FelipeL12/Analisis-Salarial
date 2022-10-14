const menu = document.getElementById("menu");
const collapseMenu = document.querySelector(".menu_drop-down");

menu.addEventListener("click", toggleCollapseMenu);

function toggleCollapseMenu() {
    collapseMenu.classList.toggle("inactive");
    info_who_are_us.classList.add("inactive");
};

const who_are_us = document.querySelector(".who_are_us")
const info_who_are_us = document.getElementById("info_who_are_us");

who_are_us.addEventListener("click", showInfoWhoAreUs);

function toggleShowInfoWhoAreUs() {
    info_who_are_us.classList.toggle("inactive");
    collapseMenu.classList.add("inactive");
};