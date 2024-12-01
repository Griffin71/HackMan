document.addEventListener("DOMContentLoaded", () => {
    const mathForm = document.getElementById("math-form");
    const accessForm = document.getElementById("access-form");
    const userAnswerInput = document.getElementById("user-answer");
    const accessCodeInput = document.getElementById("access-code");
    const errorMessage = document.getElementById("error-message");
    const mathProblemElement = document.getElementById("math-problem");

    // The correct access code
    const ACCESS_CODE = "iLoveHackMan";
    
    // Generate a random math problem with multiplication
    function generateMathProblem() {
        const num1 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        const num2 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        const answer = num1 * num2; // The correct answer

        // Display the problem
        mathProblemElement.textContent = `What is ${num1} × ${num2}?`;

        return answer; // return the correct answer
    }

    const correctAnswer = generateMathProblem();

    mathForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const userAnswer = parseInt(userAnswerInput.value);

        // Check if the user's answer is correct
        if (userAnswer === correctAnswer) {
            errorMessage.textContent = "Correct! Now enter the access code:(iLoveHackMan).";
            errorMessage.style.color = "green";

            // Show the access code input field
            mathForm.style.display = "none"; // Hide the math problem form
            accessForm.style.display = "block"; // Show the access code form
        } else {
            errorMessage.textContent = "Incorrect answer. Try again!";
            errorMessage.style.color = "red";
        }

        // Clear the answer input field
        userAnswerInput.value = "";
    });

    accessForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const accessCode = accessCodeInput.value.trim();

        // Check if the access code is correct
        if (accessCode === ACCESS_CODE) {
            // Redirect to myServices.html
            window.location.href = "myServices.html";
        } else {
            errorMessage.textContent = "Incorrect code. Try again!";
            errorMessage.style.color = "red";
        }

        // Clear the code input field
        accessCodeInput.value = "";
    });
});
