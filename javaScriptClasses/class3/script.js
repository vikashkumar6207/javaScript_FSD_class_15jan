// console.log("functions");

// {}, []

// Function in js Is treated as FIRST CLASS OBJECTS
// I can Conclude that Function is a OBJECT ONLY

//  ---------- ------- FUNCTION Declaration ---------------

// function functionName(a, b) {
//     // a and b are PARAMETERS
//     // logic  a+ b

//     // return "1000"
// }

// ------ example -----

// function sum(a, b) {

//   console.log(a, b);
//   return a + b;
// }

// sum(1, 1); // 1

// sum("1", "1"); // "1"

// ----  conclusion: we can see functions can take any TYPE of PARAMETER (a,b) and it can return
// any type of data (1 vs "1").

// ----- java ->
// public static int sum (int a, int b) {
//     // logic

// return 1;
// return "1"; // cant return this
// }

//  NOTE: Undefined is the Default value of JS.
// function mult(a, b) {
//   const ans = a * b;

//   //   return ans;

//   return undefined;
//   // this is the line that JS adds Itself if the User or the developer has not
//   //   returned anything from the function.
// }

// console.log(mult(2, 2), "console mult"); //

//  --------- Function Expression -------------

// function sum(a, b) {
//     return a + b;
// }

// const answerSum = sum(1, 20);
// console.log(answerSum, "answerSum debug declaration");

// int, boolean, string, Array, Object

// let a = function (a,b) {

//     return a + b;
// }

// let sumExpression = function (a, b) {
//     return a + b;
// };

// let answerSumExpression = sumExpression(1, 20);
// console.log(answerSumExpression, "answerSumExpression debug");
// --------------------- FUNCTIONS---------------------
//     // Look at function folder....

// -------------------- Facts about JS Parsing ------------

// When JS File is Parsed(travelled) It is parsed from TOP to Bottom.
// Travelling has 2 Phases
// 1. Parsing phase - Only  Function DECLARATION and Variable DECLARATION.
// 2. Execution phase - Everything except in Parsing phase.

// --------------------- Hoisting -----------------

/*
    Variable DECLARATION and Function DECLARATION are Hoisted.
    Hoisted means to bring these 2 things on top of the file.
*/

//     console.log(namePrint("utkrsh"));
// console.log(namePrint("akash"));

// function namePrint(name) {
//     return `hey !!! ${name}`;
// }

//  ------ Fact ---
// var a = 12; // this line as 2 parts

// the above line can be de-constructed into 2 steps.

// var a; // 1. Variable Declaration
// a = 12; // 2. Variable Assignment

// Exmple 1

// console.log(a);
// var a = 12;

// console.log(a);

// Example 2:

// var a;
// a = 9;
// console.log(a);

//  ----------------------- Scoping (Scope) ---------------------

// 1. the Js File is a Global iteself.
// 2. Scope of Var => global And Functional

// Example 1 ->
// var a = 12; // Scope of a is Global
// console.log(a); // 12

// if (true) {
//   console.log(a, "inside of the if block"); // 12
// }

// console.log(a);

// Example 2 ->

// if (true) {
//   var a = 100;
//   console.log(a, "answer 1");
// }

// console.log(a, "ans 2");

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr); 
let tenSquared = function(x) {return x*x;};
console.log(tenSquared(2));