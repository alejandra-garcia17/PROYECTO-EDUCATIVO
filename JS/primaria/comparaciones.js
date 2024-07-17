function checkAnswer(button, correctAnswer, exerciseNumber) {
    let message = document.getElementById(`txt_msj${exerciseNumber}`);
    let audio;

    if (button.querySelector('img').alt === correctAnswer) {
        message.textContent = "¡¡¡Bien Hecho!!!";
        message.style.color = 'purple';
        audio = document.getElementById("acierto");
        audio.play();

        setTimeout(() => {
            message.textContent = "";
            document.getElementById(`ejercicio${exerciseNumber}`).style.display = "none";
            let nextExercise = document.getElementById(`ejercicio${exerciseNumber + 1}`);
            if (nextExercise) {
                nextExercise.style.display = "block";
            } else {
                document.getElementById("final-explanation").style.display = "block";
            }
        }, 2000);
    } else {
        message.textContent = "¡¡¡Vuelve a intentarlo!!!";
        message.style.color = 'red';
        audio = document.getElementById("fallo");
        audio.play();
    }
}
