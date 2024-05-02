function convertFCFA(amount) {
    const denominations = [10000, 5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 2, 1];
    let result = [];

    // Recursive function to find the denominations for the given amount
    function findDenominations(amount, index) {
        if (amount === 0 || index === denominations.length) {
            return;
        }

        // Check if the current denomination can be used
        if (amount >= denominations[index]) {
            // Calculate the number of times the current denomination can be used
            const count = Math.floor(amount / denominations[index]);

            result.push(`(${denominations[index]}F)`.repeat(count));

            findDenominations(amount % denominations[index], index + 1);
        } else {
            // Move to the next denomination
            findDenominations(amount, index + 1);
        }
    }

    // Start the recursive function
    findDenominations(amount, 0);

    // Return the result as a string separated by spaces
    return result.join(' ');
}

// Function to handle the conversion process when the button is clicked
function handleConversion() {
    const amountInput = document.getElementById('amountInput');
    const resultArea = document.getElementById('resultArea');

    // Get the amount entered by the user
    const amount = parseInt(amountInput.value);

    // Checking if the amount is valid
    if (!isNaN(amount)) {
        const result = convertFCFA(amount);

        resultArea.textContent = result;
    } else {
        // Display an error message if the amount is invalid
        resultArea.textContent = 'Invalid amount. Please enter a valid number.';
    }
}

// Add event listener to the convert button
const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', handleConversion);