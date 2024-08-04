//import the calculation file 

const calculation = require("./calculations");
//basically the calculation returns the object 

console.log(calculation);
 //
// > helloworld@1.0.0 start
// > node main

// { add: [Function: add] }



//using the objects 

console.log(calculation.add(2,4));
console.log(`the subtraction of 2 numbers ${calculation.multiplication(100,50)}`);