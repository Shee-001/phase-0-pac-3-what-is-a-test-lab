// Define the variables correctly
const name = "Susan"; // Must be "Susan" to pass the test
const height = 39; // Must be a number less than 40

// Create a message using the variables
const message = `${name} is ${height} inches tall`;

// Export the variables (important for testing)
module.exports = { name, height, message };