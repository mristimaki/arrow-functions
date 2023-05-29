/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
    // Code block
    // return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
/**
 * To convert this function to an arrow function, we just replace 
 * the word "function" with "const", add a equal sign between the 
 * name of the constant and the parentheses and then use the ES6
 * "fat arrow" => to point at the curly braces. Everything else 
 * stays the same.
 */
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);


// Single Line Arrow Function With Parameters
/**
 * Since all the function body does is returning a + b, we 
 * can actually remove the curly braces, and remove the return 
 * statement entirely and just put a + b on the same line. 
 * In this way the "fat arrow" can be thouhgt as a sort of
 * implicit way of stating what you want the function
 * to return.
 */
// const addTwoNumbers2 = (a, b) => (a + b); Also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
// since it only has one parameter (message), it doesn't need
// the parentheses around it. 
saySomething("Hello there!")

const sayHello = () => console.log("Hello");
// If you've got a function that takes no parameters at all
// you must use a set of empty parentheses to tell JavaScript
// you're declaring a function.
sayHello();

// Returning Multiple Lines
/**
 * If you need to return multiple lines of code, you must
 * wrap whatever comes after the return keyword in ()
 */
const returnMultipleLines = () => (
    `<p>
        This is a Multiline string!
    </p>`
)
console.log(returnMultipleLines());