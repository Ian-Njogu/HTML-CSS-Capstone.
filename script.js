const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");



menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
     // Toggle icon between ☰ and ✖
     menuButton.innerHTML = mobileMenu.classList.contains("hidden") ? "&#9776;" : "&#10006;";
     menuButton.style.color = "black";
});




