let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});