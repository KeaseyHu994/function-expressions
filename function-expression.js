// Hunter Keasey
// 05 06 2024
// JS Function Expression Example

//in
const calcSum = function(num1, num2){
    return num1 + num2;
}


//process
const answer = calcSum(12, 5);


//out
//1st ans
console.log(`(Option 1): The sum is: ${answer}`);

//2nd ans
console.log(`(Option 2): The sum is: ${calcSum(20, 4)}`);

// Calling the function sum from within the template string
const firstNum = 20;
const secondNum = 4;

//3rd ans
console.log(`(Option 3): The sum is: ${calcSum(firstNum, secondNum)}`);
//end out