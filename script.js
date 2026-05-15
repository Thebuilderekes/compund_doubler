document.getElementById('calc-btn').addEventListener('click', () => {
    let amount = parseFloat(document.getElementById('principal').value);
    const times = parseInt(document.getElementById('iterations').value);
    const display = document.getElementById('final-amount');
    const label = document.getElementById('result-label');

    if (isNaN(amount) || isNaN(times)) {
        display.innerText = "Error";
        return;
    }

    // Update label dynamically
    label.innerText = `Result after ${times} doublings`;

    // The Compounding Loop
    // This takes the result of the previous double and doubles it again
    for (let i = 0; i < times; i++) {
        amount *= 2;
    }

    // Format as Currency
    display.innerText = amount.toLocaleString('en-NG', {
        style: 'currency',
        currency: 'NGN',
maximumFractionDigits: 0, // Removes the decimal points (.00)
    minimumFractionDigits: 0
    });

    // Success animation
    display.style.color = "#86efac";
    setTimeout(() => { display.style.color = "#4ade80"; }, 300);
});
