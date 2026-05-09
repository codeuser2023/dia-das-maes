function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

/* MODAL */
function abrirImagem(src) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("imgModal");
    img.src = src;
    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

/* FLORES */
const particles = document.getElementById("particles");

function criarFlor() {
    const p = document.createElement("div");

    const emojis = ["🌸", "🌺", "🌷", "💐", "🌹"];
    p.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    p.style.left = Math.random() * 100 + "vw";
    p.style.fontSize = (15 + Math.random() * 20) + "px";
    p.style.animationDuration = (3 + Math.random() * 3) + "s";

    particles.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 6000);
}

setInterval(criarFlor, 300);
