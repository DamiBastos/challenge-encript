
function encriptar() {
    let textoInicial = document.getElementById("texto-inicial").value;
    let textoFinal = document.getElementById("resultado");

    if(textoInicial !== ""){
    let encriptado = logicaEncriptar(textoInicial);

    textoFinal.className = "frame-2resultado";

    textoFinal.innerHTML = `
        <p id="encriptado">${encriptado}</p>
        <button onclick="copiarAlPortapapeles()" class="btn-copiar">Copiar</button>
    `;
    } else {
        textoFinal.innerHTML = `
        <img src="/assets/no-image.jpg" alt="no-image">
        <h2>Ningún mensaje encontrado</h2>
        <h4>Ingresa el texto que desees encriptar o desencriptar</h4>
        `;
    }
}

function logicaEncriptar(texto) {

    const regex = /^[a-z ]+$/;

    if (!regex.test(texto)) {
        return "El texto contiene caracteres inválidos. Solo se permiten letras minúsculas y espacios.";
    }

    let caracteres = texto.split('');

    let resultado = caracteres.map(a => {
        if (a === "a") {
            return "ai";
        } else if (a === "e") {
            return "enter";
        } else if (a === "i") {
            return "imes";
        } else if (a === "o") {
            return "ober";
        } else if (a === "u") {
            return "ufat";
        } else {
            return a; 
        }
    });

    return resultado.join('');
}

function desencriptar() {
    let textoInicial = document.getElementById("texto-inicial").value
    let textoFinal = document.getElementById("encriptado")


    if(textoInicial !== ""){
        textoFinal.innerHTML = logicaDesencriptar(textoInicial)
    }
    else {
        textoFinal.innerHTML = `
        <div>
        <img src="/assets/no-image.jpg" alt="no-image">
        <h2>Ningún mensaje encontrado</h2>
        <h4>Ingresa el texto que desees encriptar o desencriptar</h4>
        </div>`;
    }
}

function logicaDesencriptar(texto) {
    let resultado = texto;
    resultado = resultado.replace(/ai/g, "a");
    resultado = resultado.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
    return resultado;
}

function copiarAlPortapapeles() {
    let texto = document.getElementById("encriptado").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}