function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function abrirImagem(src) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("imgModal");
    img.src = src;
    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// partículas simples
const particles = document.getElementById("particles");

for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.innerHTML = "🌸";
    p.style.position = "absolute";
    p.style.left = Math.random() * 100 + "%";
    p.style.animation = "fall 5s linear infinite";
    particles.appendChild(p);
}