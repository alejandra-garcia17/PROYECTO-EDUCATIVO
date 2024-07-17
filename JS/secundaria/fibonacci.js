//Pedir al usuario un número entero positivo y generar esa cantidad de
// números de la secuencia de Fibonacci usando un bucle

function generarSecuencia() {
    let cantidad = parseInt(document.getElementById('numero').value);
    
    let a = 0, b = 1;
    let resultado = [];
    for (let i = 0; i < cantidad; i++) {
      resultado.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
    document.getElementById('resultado').textContent = resultado.join(', ');
  }
  
  //explicacion
  //Se inicia a y b como los primeros dos números de la secuencia de Fibonacci.Se utiliza un bucle for para generar los primeros cantidad 
  //números de Fibonacci, almacenándolos en el array resultado. Finalmente, se muestra el resultado en el elemento <p> con id "resultado" usando document.getElementById('resultado').textContent.