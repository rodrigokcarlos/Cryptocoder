// elementos DOM
function pegaDom(classe){
    return document.querySelector(classe);
}
const formulario = pegaDom('.formulario');
const radioCesar = pegaDom('#cesar');
const radiob64 = pegaDom('#b64');
const cesarNumero = pegaDom('.cesarNumber');
const inputEntrada = pegaDom('#inputEntrada');
const inputSaida = pegaDom('#inputSaida');
const codifica = pegaDom('#codifica');
const decodifica = pegaDom('#decodifica');
const botaoGo = pegaDom('.botaoGo');


// numero válido
const regexNumber = /[0-9]/;
function aceitaNumero(){
    if(!regexNumber.test(cesarNumero.value)){
        cesarNumero.style.border = '5px solid red';
        cesarNumero.placeholder = 'Insira um Numero!';
    }else {
        cesarNumero.style.border = '5px solid #04F404';
    }
}
// função de parametro para cifra de cesar
function someCesar() {
    if (radioCesar.checked) {
        cesarNumero.style.display = 'flex';
    }else{
        cesarNumero.style.display = 'none';
    }
}
function codeDecode() {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
    });
    saida = '';
    if(radioCesar.checked && codifica.checked){
        cesar(inputEntrada.value, parseInt(cesarNumero.value))
        return inputSaida.value = saida;
    }
    if(radioCesar.checked && decodifica.checked){
        decifraCesar(inputEntrada.value, parseInt(cesarNumero.value))
        return inputSaida.value = saida;
    }
    if(radiob64.checked && codifica.checked) {
        codaBase64(inputEntrada.value);
        return inputSaida.value = saida;
    }
    if(radiob64.checked && decodifica.checked) {
        decifraBase64(inputEntrada.value);
        return inputSaida.value = saida;
    }

}

let saida = '';
let cifra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let maiusculo = /[A-Z]/;
// funçao de codificar cesar
function cesar(cifraCesar, quantidade) {
    let palavra = [];
    let palavraComoArr = cifraCesar.split('');
    const testRg = (/[a-zA-Z]/);
    for (let i = 0; i < palavraComoArr.length; i++) {
        if(testRg.test(palavraComoArr[i])){
            for (let y = 0; y < cifra.length; y++) {
                if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                    if(Math.sign(y + quantidade) == -1){
                        let calc = cifra.length + ((y + quantidade)%cifra.length)
                        palavra += cifra[calc].toUpperCase();
                    }else{
                        palavra += cifra[(y + quantidade)%cifra.length].toUpperCase();
                    }
                }else if(palavraComoArr[i] === cifra[y]){
                    if(Math.sign(y + quantidade) == -1){
                        let calc = cifra.length + ((y + quantidade)%cifra.length)
                        palavra += cifra[calc];
                    }else{
                        palavra += cifra[(y + quantidade)%cifra.length]
                    }
              }
            }
        }else {
            palavra += palavraComoArr[i];
        }
    }
    if(palavra.match(/undefined/)){
        palavra = '';
    }
    saida = palavra;
    return saida;
}
// função de decodificar cesar
function decifraCesar(cifrado, quantidade) {
    let palavra = [];
    let palavraComoArr = cifrado.split('');
    const testRg = (/[a-zA-Z]/);
    for (let i = 0; i < palavraComoArr.length; i++) {
        if(testRg.test(palavraComoArr[i])){
            for (let y = 0; y < cifra.length; y++) {
                if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                    if(Math.sign(y - quantidade) == -1){
                        let calc = cifra.length + ((y - quantidade)%cifra.length)
                        palavra += cifra[calc].toUpperCase();
                    }else{
                        palavra += cifra[(y - quantidade)%cifra.length].toUpperCase();
                    }
                }else if(palavraComoArr[i] === cifra[y]){
                    if(Math.sign(y - quantidade) == -1){
                        let calc = cifra.length + ((y - quantidade)%cifra.length)
                        palavra += cifra[calc];
                    }else{
                        palavra += cifra[(y - quantidade)%cifra.length]
                    }
                }
            }
        }else {
            palavra += palavraComoArr[i];
        }
    }
    if(palavra.match(/undefined/)){
        palavra = '';
    }
    saida = palavra;
    return saida;
}

// texto para base64
function codaBase64(texto) {
    saida = btoa(texto);
    return
}

//  base64 para texto
function decifraBase64(texto) {
    saida = atob(texto);
    return 
}