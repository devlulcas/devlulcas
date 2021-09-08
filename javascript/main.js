const buttonMenu = document.querySelector("#menu-btn");
const optionsMenu = document.querySelector("#menu-options");
const mobileMenu = document.querySelector("[data-open]");

//Open and closes the mobile navigation menu
buttonMenu.onclick = () => openMenu();
optionsMenu.onclick = () => openMenu();

function openMenu() {
  const menuState = mobileMenu.dataset;
  buttonMenu.classList.toggle("menu-btn-animate");
  //Closes the menu if it's open, Opens the menu if it's closed
  menuState.open = menuState.open === "true" ? "false" : "true";
}
