// Efeito de menu flutuante
window.addEventListener("scroll", () => {
    const menu = document.querySelector(".menu");
    if (window.scrollY > 50) {
        menu.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        menu.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
});
