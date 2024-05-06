//Hunter Keasey
// 05 06 2024
// JS Function Expression Example


//function 1
const calcProduct = function  (num1, num2) {
    // Calculate the product of two numbers
    return num1 * num2;
}

// Assign the result of the calculation to a
// variable named answer
const firstNum = 4;
const secondNum = 5;
const answer = calcProduct(firstNum, secondNum);
// Show the answer in the browser console by
// building a template string, i.e., a fill-in-the-blank sentence
console.log(`The product of ${firstNum} and ${secondNum} is: ${answer}`);


//function 2
const welcomeUser = function  (fName) {
    // Welcome the user by their first name
    return `Welcome to Career Tech, ${fName}!`;
}
// Call the welcomeUser function and use the alert ( ) method to display the welcome message in an alert box
const firstName = 'Hunter';
alert(welcomeUser(firstName));


//function 3
const showBiography = function  (fName, lName, userAge) {
    // Build a template string containing the user's full name and age
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
// Call the showBiography function and display the info
// about the user in the browser console
const firstName = 'Hunter';
const lastName = 'Keasey';
const age = 24;
console.log(showBiography(firstName, lastName, age));