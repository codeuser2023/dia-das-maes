function abrirMensagem() {
const msg = document.getElementById("mensagem");
msg.classList.add("show");
msg.scrollIntoView({ behavior: "smooth" });
}

/* modal */
function abrirImg(src){
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=src;
}

function fecharModal(){
document.getElementById("modal").style.display="none";
}

/* flores estáveis */
const particles = document.getElementById("particles");

function flor(){
const d = document.createElement("div");

const emojis=["🌸","🌺","🌷","💐"];
d.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

d.style.left = Math.random()*100+"vw";
d.style.fontSize = (15+Math.random()*20)+"px";
d.style.animationDuration = (3+Math.random()*3)+"s";

particles.appendChild(d);

setTimeout(()=>d.remove(),6000);
}

setInterval(flor,300);
