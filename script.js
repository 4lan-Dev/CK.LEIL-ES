const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Abre e fecha o menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Fecha ao clicar em um link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// Fecha ao clicar fora do menu
document.addEventListener("click", (e) => {

    const clicouNoMenu = menu.contains(e.target);
    const clicouNoBotao = menuBtn.contains(e.target);

    if (!clicouNoMenu && !clicouNoBotao) {
        menu.classList.remove("active");
    }

});

// Animação dos cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {
    observer.observe(card);
});