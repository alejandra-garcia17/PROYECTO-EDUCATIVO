function checkAnswer(riddleNumber) {
    let answer = document.getElementById(`answer${riddleNumber}`).value.toLowerCase();
    let result = document.getElementById(`result${riddleNumber}`);

    if (riddleNumber === 1) {
        if (answer == "6") {
            result.textContent = "¡Correcto! El número es 6.";
        } else {
            result.textContent = "Incorrecto. Intenta nuevamente.";
        }
    } else if (riddleNumber === 2) {
        if (answer == "perfecto") {
            result.textContent = "¡Correcto! Es un número perfecto.";
        } else {
            result.textContent = "Incorrecto. Intenta nuevamente.";
        }
    }
}