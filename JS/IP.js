// Fetch the user's IP address and display it in the header
document.addEventListener("DOMContentLoaded", () => {
    const ipAddressElement = document.getElementById("ip-address");

    // Use the ipify API to fetch the user's public IP address
    fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
            ipAddressElement.textContent = `Your IP Adress: ${data.ip}`;
        })
        .catch((error) => {
            ipAddressElement.textContent = "Error fetching IP";
            console.error("IP Fetch Error:", error);
        });
});
