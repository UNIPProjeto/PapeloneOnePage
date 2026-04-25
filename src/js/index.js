let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // descendo → esconde
        navbar.style.top = "-80px";
    } else {
        // subindo → mostra
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});