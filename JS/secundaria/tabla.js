//:Pedir al usuario un número entero y tipo d tabla y generar su tabla de
//multiplicar o sumar del 1 al 10 usando un bucle

function generarTabla() {
    let numero = parseInt(document.getElementById('numero').value);
    let operacion = document.getElementById('operacion').value;
    let resultado = document.getElementById('resultado');
    let tabla = '';
  
    if (operacion === 'multiplicacion') {
        for (let i = 1; i <= 10; i++) {
            tabla += `${numero} x ${i} = ${numero * i}<br>`;
        }
    } else if (operacion === 'suma') {
        let suma = 0;
        for (let i = 1; i <= 10; i++) {
            suma += i;
            tabla += `${numero} + ${i} = ${numero + i}<br>`;
            // if (i < 10) {
            //     tabla += ' + ';
            // } else {
            //     tabla += ' = ';
            // }
        }
    }
  
    resultado.innerHTML = tabla;
}
  
  //explicacion 
  //Cuando el usuario ingresa un número y selecciona el tipo de operación y luego hace clic en "Generar Tabla", se ejecuta 
  //verifica si el número ingresado es válido, Luego, crea una tabla que muestra la multiplicación o suma del número ingresado con los números del 1 al 10.
  //Si operacion es multiplicacion, calcula numero * i y crea una fila con el formato "número x i = resultado".
  //Si operacion es suma, calcula numero + i y crea una fila con el formato "número + i = resultado".