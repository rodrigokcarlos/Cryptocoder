const fundo = document.querySelector("#fundo");
const caneta = fundo.getContext("2d");

fundo.height = window.innerHeight;
fundo.width = window.innerWidth;

const fontes = ['0','1'];
const fontSize = 18;
const columns = fundo.width / fontSize;
const gotinhas = new Array(Math.floor(columns)).fill(1);

function chover() {
    caneta.fillStyle = "rgba(0, 0, 0, 0.05)";
    caneta.fillRect(0, 0, fundo.width, fundo.height);
    caneta.fillStyle = "#0F0";
    caneta.font = `${fontSize}px arial`;

    for (let i = 0; i < gotinhas.length; i++) {
        const usaLetra = fontes[Math.floor(Math.random() * fontes.length)];
        caneta.fillText(usaLetra, i * fontSize, gotinhas[i] * fontSize);
        if (gotinhas[i] * fontSize > fundo.height && Math.random() > 0.95) {
            gotinhas[i] = 0;
        }
    gotinhas[i]++;
    }
  window.requestAnimationFrame(chover);
}
chover()