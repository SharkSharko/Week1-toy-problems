// Function to calculate net salary
function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // KRA Tax brackets (simplified)
    let tax = 0;
    if (grossSalary > 50000) tax = grossSalary * 0.3;
    else if (grossSalary > 25000) tax = grossSalary * 0.25;
    else if (grossSalary > 10000) tax = grossSalary * 0.1;

    // NHIF Deduction (simplified)
    let nhif = grossSalary * 0.025;

    // NSSF Deduction (simplified)
    let nssf = grossSalary * 0.06;

    // Net Salary Calculation
    let netSalary = grossSalary - (tax + nhif + nssf);

    return {
        "Gross Salary": grossSalary,
        "Tax Deduction": tax,
        "NHIF Deduction": nhif,
        "NSSF Deduction": nssf,
        "Net Salary": netSalary
    };
}

// Example usage
let basicSalary = parseFloat(prompt("Enter basic salary:"));
let benefits = parseFloat(prompt("Enter benefits amount:"));
console.log(netSalaryCalculator(basicSalary, benefits));
