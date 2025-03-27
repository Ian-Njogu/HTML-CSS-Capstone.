const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const logo = document.getElementById("logo");


menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
logo.classList.toggle("hidden");
});




