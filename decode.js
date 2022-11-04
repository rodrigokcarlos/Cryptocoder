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
    const regexp = cifraCesar.replace(/([\u0300-\u036f]|[^ a-zA-Z])/g, '');
    let palavraComoArr = regexp.split('');
    for (let i = 0; i < palavraComoArr.length; i++) {
        for (let y = 0; y < cifra.length; y++) {
            if( y < 0) {

            }
            if(palavraComoArr[i] == ' '){
                palavra += ' ';
                break;
            }else if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                console.log(cifra[(y + quantidade)%26])
                palavra += cifra[(y + quantidade)%26].toUpperCase();  
            }else if(palavraComoArr[i] === cifra[y]){
                palavra += cifra[(y + quantidade)%26];
          }
        }
    }
    console.log(palavra)
    saida = palavra;
    return
}
// função de decodificar cesar
function decifraCesar(cifrado, quantidade) {
    let palavra = [];
    const regexp = cifrado.normalize('NFD').replace(/([\u0300-\u036f]|[^ a-zA-Z])/g, '');
    let palavraComoArr = regexp.split('');
    for (let i = 0; i < palavraComoArr.length; i++) {
        for (let y = 0; y < cifra.length; y++) {
            if(palavraComoArr[i] == ' '){
                palavra += ' ';
                break;
            }else if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                console.log((y - quantidade)%26)
                // palavra += cifra[(y - quantidade)%26].toUpperCase();
            }else if(palavraComoArr[i] === cifra[y]){
                palavra += cifra[(y - quantidade)%26];
          }
        }
    }
    console.log(palavra)
    saida = palavra;
    return
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
// console.log(codaBase64('Bala de Hortelã'));
// console.log(decifraBase64('QmFsYSBkZSBIb3J0ZWzj'))

