document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".row");

    rows.forEach((row) => {
        // Generate numbers continuously
        setInterval(() => {
            const number = document.createElement("span");
            number.textContent = Math.floor(Math.random() * 10); // Random number 0-9
            number.style.left = `${Math.random() * 100}%`; // Random horizontal position
            row.appendChild(number);

            // Remove number after animation ends
            setTimeout(() => {
                number.remove();
            }, 5000); // Matches animation duration
        }, 200); // Add a number every 200ms
    });
});
