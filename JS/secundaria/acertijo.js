function checkAnswer(riddleNumber) {
    let answer = document.getElementById(`answer${riddleNumber}`).value.toLowerCase();
    let result = document.getElementById(`result${riddleNumber}`);
    let correctAnswer = "";

    switch (riddleNumber) {
        case 1:
            correctAnswer = "6";
            break;
        case 2:
            correctAnswer = "perfecto";
            break;
        case 3:
            correctAnswer = "aliento";
            break;
        case 4:
            correctAnswer = "hijo";
            break;
    }

    if (answer === correctAnswer) {
        result.textContent = "¡Correcto!";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrecto. Intenta nuevamente.";
        result.style.color = "red";
    }
}
