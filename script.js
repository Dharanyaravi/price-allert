let alertPrice = null;
let currentPrice = 0;

// Function to simulate generating a random price
function generateRandomPrice() {
    return (Math.random() * 200).toFixed(2);  // Generate a random price between $0.00 and $200.00
}

// Function to display price and check for alert
function updatePrice() {
    currentPrice = generateRandomPrice();
    document.getElementById("currentPrice").innerText = `$${currentPrice}`;

    if (alertPrice !== null && currentPrice >= alertPrice) {
        showAlert('Price alert triggered!', 'success');
    }
}

// Function to show alert message
function showAlert(message, type) {
    const alertMessageElement = document.getElementById("alertMessage");
    alertMessageElement.innerText = message;
    alertMessageElement.className = `alert-message ${type}`;
    alertMessageElement.style.display = 'block';

    setTimeout(() => {
        alertMessageElement.style.display = 'none';
    }, 3000);
}

// Set alert price when user clicks "Set Alert" button
document.getElementById("setAlertButton").addEventListener("click", () => {
    const userAlertPrice = parseFloat(document.getElementById("alertPrice").value);

    if (isNaN(userAlertPrice) || userAlertPrice <= 0) {
        showAlert('Please enter a valid price threshold!', 'error');
    } else {
        alertPrice = userAlertPrice;
        showAlert(`Alert set for $${userAlertPrice}`, 'success');
    }
});

// Generate new random price when the user clicks the "Generate Random Price" button
document.getElementById("generatePriceButton").addEventListener("click", updatePrice);
