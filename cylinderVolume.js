// Cylinder class
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate volume
    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Example usage
let radius = parseFloat(prompt("Enter cylinder radius:"));
let height = parseFloat(prompt("Enter cylinder height:"));
let cylinder = new Cylinder(radius, height);
console.log("Cylinder Volume:", cylinder.getVolume());
