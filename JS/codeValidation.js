document.addEventListener("DOMContentLoaded", () => {
    const accessForm = document.getElementById("access-form");
    const accessCodeInput = document.getElementById("access-code");
    const errorMessage = document.getElementById("error-message");

    // The correct access code
    const ACCESS_CODE = "iLoveHackMan";

    // Handle the access code submission
    accessForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const accessCode = accessCodeInput.value.trim();

        // Check if the access code is correct
        if (accessCode === ACCESS_CODE) {
            // Redirect to myServices.html if correct
            window.location.href = "myServices.html";
        } else {
            // Display error message if code is incorrect
            errorMessage.textContent = "Incorrect code. Try again!";
            errorMessage.style.color = "red";
        }

        // Clear the code input field after submission
        accessCodeInput.value = "";
    });
});
