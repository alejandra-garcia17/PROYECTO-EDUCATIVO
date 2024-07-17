// Ejercicio 4: Verificar si un número es primo
function primo(){
    let numero = parseInt(document.getElementById('numero').value);
    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        resultado.textContent = numero + " es un número primo";
    } else {
        resultado.textContent = numero + " no es un número primo";
    }
}