function mostrarMensagem() {
    const msg = document.getElementById("mensagem");

    msg.classList.remove("hidden");
    msg.classList.add("show");

    msg.scrollIntoView({ behavior: "smooth" });
}

/* MODAL */
function abrirImagem(src) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("imgModal").src = src;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

/* FLORES MELHORADAS */
const particles = document.getElementById("particles");

function criarFlor() {
    const flor = document.createElement("div");

    const emojis = ["🌸", "🌺", "🌷", "💐", "🌹"];
    flor.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    flor.style.left = Math.random() * 100 + "vw";
    flor.style.fontSize = (Math.random() * 20 + 15) + "px";
    flor.style.animationDuration = (Math.random() * 3 + 3) + "s";

    particles.appendChild(flor);

    setTimeout(() => flor.remove(), 6000);
}

setInterval(criarFlor, 250);
