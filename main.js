const menu = document.getElementById("menu");
const collapseMenu = document.querySelector(".menu_drop-down");

menu.addEventListener("click", toggleCollapseMenu);

function toggleCollapseMenu() {
    collapseMenu.classList.toggle("inactive");
}