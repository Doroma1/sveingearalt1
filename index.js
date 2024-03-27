// Helper function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
  }
  
  // Helper function to check if a number is prime
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Helper function to generate a random color in hexadecimal format
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    // Calculate the area of a rectangle
    const length = 5;
    const width = 3;
    const area = calculateArea(length, width);
    console.log(`The area of the rectangle is: ${area}`);
  
    // Check if a number is prime
    const number = 13;
    if (isPrime(number)) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  
    // Generate a random color
    const randomColor = generateRandomColor();
    console.log(`Random color: ${randomColor}`);
  }
  
  // Call the main function to run the code
  main();
  