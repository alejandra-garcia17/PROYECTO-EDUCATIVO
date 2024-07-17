function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}


document.getElementById('submit').addEventListener('click', function() {
    let results = document.getElementById('results');
    results.innerHTML = ''; 
    let correctAnswers = 0;

    // Pregunta 1
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer) {
        let q1Result = isPrime(7);
        if ((q1Result && q1Answer.value === 'yes') || (!q1Result && q1Answer.value === 'no')) {
            results.innerHTML += '<p>1. Correcto!</p>';
            correctAnswers++;
        } else {
            results.innerHTML += '<p>1. Incorrecto!</p>';
        }
    }

    // Pregunta 2
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer) {
        let q2Result = isPrime(12);
        if ((q2Result && q2Answer.value === 'yes') || (!q2Result && q2Answer.value === 'no')) {
            results.innerHTML += '<p>2. Correcto!</p>';
            correctAnswers++;
        } else {
            results.innerHTML += '<p>2. Incorrecto!</p>';
        }
    }

    // Pregunta 3
    let q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer) {
        let q3Result = isPrime(23);
        if ((q3Result && q3Answer.value === 'yes') || (!q3Result && q3Answer.value === 'no')) {
            results.innerHTML += '<p>3. Correcto!</p>';
            correctAnswers++;
        } else {
            results.innerHTML += '<p>3. Incorrecto!</p>';
        }
    }
    results.innerHTML += `<p>Obtuviste ${correctAnswers} de 3 respuestas correctas.</p>`;

});

//explicacion 
//Cuando el usuario selecciona sus respuestas y hace clic en el botón "Verificar Respuestas", el código JavaScript se activa.
//El usuario selecciona Sí o No para cada pregunta y luego hace clic en el botón Verificar Respuestas.
//El script JavaScript verifica cada respuesta seleccionada por el usuario utilizando la función isPrime para determinar si el número dado es primo.
// Después de verificar todas las respuestas, se muestran los resultados en el elemento results, indicando cuántas respuestas fueron correctas e incorrectas.