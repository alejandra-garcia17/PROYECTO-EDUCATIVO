//Dado un arreglo de notas obtener el promedio y la moda

document.getElementById('numerosForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    calcularPromedioYModa();
});

function calcularPromedioYModa() {
    let notasTexto = document.getElementById('notas-input').value;
    let notasArray = notasTexto.split(',').map(num => parseFloat(num.trim()));
    
    let promedio = calcularPromedio(notasArray);
    document.getElementById('promedio').textContent = `Promedio: ${promedio.toFixed(2)}`;
    
    let moda = calcularModa(notasArray);
    document.getElementById('moda').textContent = `Moda: ${moda}`;
}

function calcularPromedio(notas) {
    if (notas.length === 0) return 0;
    let suma = notas.reduce((acc, curr) => acc + curr, 0);
    return suma / notas.length;
}

function calcularModa(notas) {
    if (notas.length === 0) return 'No hay moda';
    
    let modaMap = new Map();
    notas.forEach(nota => {
        if (modaMap.has(nota)) {
            modaMap.set(nota, modaMap.get(nota) + 1);
        } else {
            modaMap.set(nota, 1);
        }
    });
    
    let modaValor = 0;
    let modaFrecuencia = 0;
    
    for (let [valor, frecuencia] of modaMap.entries()) {
        if (frecuencia > modaFrecuencia) {
            modaValor = valor;
            modaFrecuencia = frecuencia;
        }
    }
    
    return modaValor;
}
  
  //esplicacion
  //Calcula el promedio de un array de números sumando todos los elementos y dividiendo por la cantidad de elementos.
  //Calcula la moda de un array de números contando las frecuencias de cada valor utilizando un Map