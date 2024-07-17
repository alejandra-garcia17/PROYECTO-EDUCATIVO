document.getElementById('numerosForm').addEventListener('submit', function(event) {
    event.preventDefault();
    encontrarNumerosPerfectos();
});

function encontrarNumerosPerfectos() {
    let inputNumeros = document.getElementById('numeros').value.trim();
    if (inputNumeros === '') {
        alert('Por favor, ingrese al menos un número en el formato correcto (ej. 6, 28, 496).');
        return;
    }
    let arregloNumeros = inputNumeros.split(',').map(numero => parseInt(numero.trim()));
    let numerosPerfectos = arregloNumeros.filter(numero => esNumeroPerfecto(numero));
    mostrarNumerosPerfectos(numerosPerfectos);
}

function esNumeroPerfecto(numero) {
    if (numero <= 1) return false;
    let sumaDivisores = 1;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
            if (i !== numero / i) sumaDivisores += numero / i;
        }
    }
    return sumaDivisores === numero;
}

function mostrarNumerosPerfectos(numerosPerfectos) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<h3>Números Perfectos encontrados:</h3>';
    resultado.innerHTML += numerosPerfectos.length === 0 ?
        '<p>No se encontraron números perfectos en el arreglo.</p>' :
        `<ul>${numerosPerfectos.map(numero => `<li>${numero}</li>`).join('')}</ul>`;
}

//explicacion
//si el número es menor o igual a 1, ya que los números perfectos son mayores que 1 por definición.
// Itera desde 2 hasta la raíz cuadrada del número (Math.sqrt(numero)) para encontrar los divisores propios del número.
//Si encuentra un divisor (numero % i === 0), suma este divisor y también su complemento (si es distinto de i).