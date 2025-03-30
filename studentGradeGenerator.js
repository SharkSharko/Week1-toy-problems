// Function to generate student grade based on marks
function generateGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid input! Marks should be between 0 and 100.";
    } else if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 50) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

// Get user input from prompt
const userMarks = prompt("Enter student marks (0-100):");

// Convert input to a number and validate
const marks = Number(userMarks);

if (!isNaN(marks)) {
    const grade = generateGrade(marks);
    console.log(grade);
    alert(grade);
} else {
    console.log("Invalid input! Please enter a numeric value.");
    alert("Invalid input! Please enter a numeric value.");
}
console.log(calculateGrade(95)); // Should print: A
console.log(calculateGrade(67)); // Should print: C
console.log(calculateGrade(30)); // Should print: E

