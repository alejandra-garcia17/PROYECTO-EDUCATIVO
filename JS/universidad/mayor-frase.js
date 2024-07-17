
function compararFrases() {
    const frase1 = document.getElementById('frase1').value.trim();
    const frase2 = document.getElementById('frase2').value.trim();

    const palabrasFrase1 = frase1.split(/\s+/).filter(Boolean);
    const palabrasFrase2 = frase2.split(/\s+/).filter(Boolean);

    const numPalabrasFrase1 = palabrasFrase1.length;
    const numPalabrasFrase2 = palabrasFrase2.length;

    let mensaje = '';

    if (numPalabrasFrase1 > numPalabrasFrase2) {
        mensaje = `La primera frase tiene más palabras (${numPalabrasFrase1}) que la segunda frase (${numPalabrasFrase2}).`;
    } else if (numPalabrasFrase2 > numPalabrasFrase1) {
        mensaje = `La segunda frase tiene más palabras (${numPalabrasFrase2}) que la primera frase (${numPalabrasFrase1}).`;
    } else {
        mensaje = `Ambas frases tienen el mismo número de palabras (${numPalabrasFrase1}).`;
    }

    document.getElementById('resultado').textContent = mensaje;
}
