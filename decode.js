let cifra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let palavra = [];
let maiusculo = /[A-Z]/;
// funçao de codificar cesar
function cesar(cifraCesar, quantidade) {
    const regexp = cifraCesar.normalize('NFD').replace(/([\u0300-\u036f]|[^ a-zA-Z])/g, '');
    let palavraComoArr = regexp.split('');
    for (let i = 0; i < palavraComoArr.length; i++) {
        for (let y = 0; y < cifra.length; y++) {
            if(palavraComoArr[i] == ' '){
                palavra += ' ';
                break;
            }else if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                palavra += cifra[(y + quantidade)%26].toUpperCase();  
            }else if(palavraComoArr[i] === cifra[y]){
                palavra += cifra[(y + quantidade)%26];
          }
        }
    }
    return palavra
}

// função de decodificar cesar
function decifraCesar(cifrado, quantidade) {
    const regexp = cifrado.normalize('NFD').replace(/([\u0300-\u036f]|[^ a-zA-Z])/g, '');
    let palavraComoArr = cifrado.split('');
    for (let i = 0; i < palavraComoArr.length; i++) {
        for (let y = 0; y < cifra.length; y++) {
            if(palavraComoArr[i] == ' '){
                palavra += ' ';
                break;
            }else if(maiusculo.test(palavraComoArr[i]) && palavraComoArr[i].toLowerCase() === cifra[y]){
                palavra += cifra[(y - quantidade)%26].toUpperCase();  
            }else if(palavraComoArr[i] === cifra[y]){
                palavra += cifra[(y - quantidade)%26];
          }
        }
    }
    return palavra
}


// texto para base64
function codaBase64(texto) {
    return btoa(texto);
}

//  base64 para texto
function decifraBase64(texto) {
    return atob(texto);
}
console.log(codaBase64('Bala de Hortelã'));
console.log(decifraBase64('QmFsYSBkZSBIb3J0ZWzj'))