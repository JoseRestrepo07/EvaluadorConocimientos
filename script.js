document.getElementById("submit-btn").addEventListener("click", function () {
    // Respuestas correctas
    const correctAnswers = {
        q1: "a", // DOM significa Document Object Model
        q2: "c", // Integer no es un tipo de dato en JavaScript
        q3: "a", // push() agrega un elemento al final del array
        q4: "b", // let es una palabra clave para declarar variables
        q5: "a", // === compara valor y tipo
    };

    let score = 0;

    // Calcular la nota
    for (let i = 1; i <= 5; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Mostrar el resultado
    const resultDiv = document.getElementById("result");
    const scoreSpan = document.getElementById("score");
    const messageP = document.getElementById("message");

    scoreSpan.textContent = score;

    if (score >= 4) {
        messageP.textContent = "¡Felicidades! Obtuviste la nota máxima (5).";
    } else if (score >= 3) {
        messageP.textContent = "Aprobado. Obtuviste una nota mínima (3).";
    } else {
        messageP.textContent = "Reprobado. Menos de 3 es nota perdida.";
    }

    resultDiv.classList.remove("hidden");
});