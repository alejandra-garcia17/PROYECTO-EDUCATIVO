
function analizarTexto() {
    let texto = document.getElementById("texto").value;
    let caracteres = texto.length;
    let vocales = texto.match(/[aeiouáéíóú]/gi) ? texto.match(/[aeiouáéíóú]/gi).length : 0;
    let signos = texto.match(/[^\w\s]/g) ? texto.match(/[^\w\s]/g).length : 0;
    let espacios = texto.match(/\s/g) ? texto.match(/\s/g).length : 0;
    let palabras = texto.trim().split(/\s+/).length;
    let digitos = texto.match(/\d/g) ? texto.match(/\d/g).length : 0;

    let resultado = `
        <p>Número de caracteres: ${caracteres}</p>
        <p>Número de vocales: ${vocales}</p>
        <p>Número de signos: ${signos}</p>
        <p>Número de espacios: ${espacios}</p>
        <p>Número de palabras: ${palabras}</p>
        <p>Número de dígitos: ${digitos}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}