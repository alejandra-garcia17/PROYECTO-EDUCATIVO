function contarRepeticiones() {
    let secuenciaStr = document.getElementById('secuencia').value;
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    let secuenciaArray = secuenciaStr.split(',').map(Number);
    let count = 0;

    for (let i = 0; i < secuenciaArray.length; i++) {
        if (secuenciaArray[i] === numero) {
            count++;
        }
    }

    resultado.textContent = `El número ${numero} se repite ${count} veces en la secuencia.`;
}
