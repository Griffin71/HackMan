document.addEventListener("DOMContentLoaded", () => {
    const requestCodeButton = document.getElementById("request-code");
    const emailForm = document.getElementById("email-form");

    requestCodeButton.addEventListener("click", () => {
        emailForm.style.display = "block"; // Show the email form
    });

    emailForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        const emailInput = document.getElementById("email");

        // Simulate sending the code
        alert(`The code has been sent to ${emailInput.value}`);

        emailInput.value = ""; // Clear the input field
        emailForm.style.display = "none"; // Hide the email form
    });
});
