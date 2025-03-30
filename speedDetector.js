// Function to check speed and assign demerit points
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        return points > 12 ? "License suspended" : `Points: ${points}`;
    }
}

// Example usage
let speed = parseInt(prompt("Enter car speed (km/h):"));
console.log(speedDetector(speed));
