function checkAnswer(button, exerciseNumber) {
    const exercise = button.closest('.exercise');
    const correctAnswer = exercise.getAttribute('data-answer');
    const messageElement = document.getElementById(`txt_msj${exerciseNumber}`);
    const userAnswer = button.getAttribute('data-value');

    if (userAnswer == correctAnswer) {
        messageElement.textContent = "Correcto!";
        document.getElementById('acierto').play();
    } else {
        messageElement.textContent = "Incorrecto. Inténtalo de nuevo.";
        document.getElementById('fallo').play();
    }

    // Muestra el siguiente ejercicio o la explicación final
    const nextExercise = exercise.nextElementSibling;
    if (nextExercise && nextExercise.classList.contains('exercise')) {
        nextExercise.style.display = 'block';
    } else {
        document.getElementById('final-explanation').style.display = 'block';
    }

    // Oculta el ejercicio actual
    exercise.style.display = 'none';
}