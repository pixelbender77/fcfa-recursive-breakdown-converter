// Function to convert FCFA amount to notes and coins
function convertToNotesAndCoins(amount) {
    // Define the denominations of FCFA notes and coins
    const denominations = [10000, 5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 2, 1];
    const result = [];

    // Check for special cases
    if (amount === 10000) {
        return '(5000) (5000)';
    } else if (amount === 5000) {
        return '(2000) (2000) (1000)';
    } else if (amount === 2000) {
        return '(1000) (1000)';
    } else if (amount === 1000) {
        return '(500) (500)';
    } else if (amount === 500) {
        return '(100) (100) (100) (100) (100)';
    }

    // Recursive function to find the denomination for the given amount
    function findDenomination(index, remaining) {
        // Base case: if the remaining amount is 0 or all denominations are checked
        if (remaining === 0 || index === denominations.length) {
            return;
        }

        // Check if the current denomination can be used
        if (remaining >= denominations[index]) {
            // Add the denomination to the result
            result.push(denominations[index]);
            // Recursively find the next denomination
            findDenomination(index, remaining - denominations[index]);
        } else {
            // Move to the next denomination
            findDenomination(index + 1, remaining);
        }
    }

    // Start the recursion with the highest denomination
    findDenomination(0, amount);

    // Return the result as a string
    return result.map(denomination => `(${denomination})`).join(' ');
}

// Function to handle the conversion when the button is clicked
function handleConversion() {
    // Get the input amount from the user
    const amountInput = document.getElementById('amountInput').value;
    // Convert the input to an integer
    const amount = parseInt(amountInput, 10);

    // Check if the input is a valid number
    if (!isNaN(amount)) {
        // Perform the conversion and display the result
        const resultArea = document.getElementById('resultArea');
        resultArea.textContent = convertToNotesAndCoins(amount);
    } else {
        // If the input is not a valid number, display an error message
        alert('Please enter a valid amount in FCFA.');
    }
}

// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', handleConversion);
// Function to convert FCFA amount to notes and coins
// function convertToNotesAndCoins(amount) {
//     // Define the denominations of FCFA notes and coins
//     const denominations = [10000, 5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 2, 1];
//     const result = [];

//     // Recursive function to find the denomination for the given amount
//     function findDenomination(index, remaining) {
//         // Base case: if the remaining amount is 0 or all denominations are checked
//         if (remaining === 0 || index === denominations.length) {
//             return;
//         }

//         // Check if the current denomination can be used
//         if (remaining >= denominations[index]) {
//             // Add the denomination to the result
//             result.push(denominations[index]);
//             // Recursively find the next denomination
//             findDenomination(index, remaining - denominations[index]);
//         } else {
//             // Move to the next denomination
//             findDenomination(index + 1, remaining);
//         }
//     }

//     // Start the recursion with the highest denomination
//     findDenomination(0, amount);

//     // Return the result as a string
//     return result.map(denomination => `(${denomination})`).join(' ');
// }

// // Function to handle the conversion when the button is clicked
// function handleConversion() {
//     // Get the input amount from the user
//     const amountInput = document.getElementById('amountInput').value;
//     // Convert the input to an integer
//     const amount = parseInt(amountInput, 10);

//     // Check if the input is a valid number
//     if (!isNaN(amount)) {
//         // Perform the conversion and display the result
//         const resultArea = document.getElementById('resultArea');
//         resultArea.textContent = convertToNotesAndCoins(amount);
//     } else {
//         // If the input is not a valid number, display an error message
//         alert('Please enter a valid amount in FCFA.');
//     }
// }

// // Add event listener to the convert button
// document.getElementById('convertBtn').addEventListener('click', handleConversion);


// function convertFCFA(amount) {
//     const denominations = [10000, 5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 2, 1];
//     let result = [];

//     // Recursive function to find the denominations for the given amount
//     function findDenominations(amount, index) {
//         if (amount === 0 || index === denominations.length) {
//             return;
//         }

//         // Check if the current denomination can be used
//         if (amount >= denominations[index]) {
//             // Calculate the number of times the current denomination can be used
//             const count = Math.floor(amount / denominations[index]);

//             result.push(`(${denominations[index]}F)`.repeat(count));

//             findDenominations(amount % denominations[index], index + 1);
//         } else {
//             // Move to the next denomination
//             findDenominations(amount, index + 1);
//         }
//     }

//     // Start the recursive function
//     findDenominations(amount, 0);

//     // Return the result as a string separated by spaces
//     return result.join(' ');
// }

// // Function to handle the conversion process when the button is clicked
// function handleConversion() {
//     const amountInput = document.getElementById('amountInput');
//     const resultArea = document.getElementById('resultArea');

//     // Get the amount entered by the user
//     const amount = parseInt(amountInput.value);

//     // Checking if the amount is valid
//     if (!isNaN(amount)) {
//         const result = convertFCFA(amount);

//         resultArea.textContent = result;
//     } else {
//         // Display an error message if the amount is invalid
//         resultArea.textContent = 'Invalid amount. Please enter a valid number.';
//     }
// }

// // Add event listener to the convert button
// const convertBtn = document.getElementById('convertBtn');
// convertBtn.addEventListener('click', handleConversion););
// convertBtn.addEventListener('click', handleConversion);