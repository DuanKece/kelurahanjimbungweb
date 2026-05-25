const btn = document.getElementById("theme-toggle");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {

    // fade out dulu
    icon.style.opacity = "0";

        setTimeout(() => {
    if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    // fade in lagi
        icon.style.opacity = "1";

    }, 150);
});

let lastScroll = 0;
const navbar = document.querySelector(".navbar-wrapper");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scroll ke bawah → sembunyikan
        navbar.classList.add("navbar-hide");
    } else {
        // scroll ke atas → tampilkan
        navbar.classList.remove("navbar-hide");
    }

    lastScroll = currentScroll;
});