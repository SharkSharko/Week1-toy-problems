// Function to generate a staircase pattern
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i));
    }
}

// Example usage
let levels = parseInt(prompt("Enter the number of staircase levels:"));
staircase(levels);
