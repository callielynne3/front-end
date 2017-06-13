// JS Questions

// What are the differences between null and undefined?
// JavaScript has two distinct values for nothing, null and undefined.
// undefined means, value of the variable is not defined
// null means empty or non-existent value which is used by programmers to indicate “no value”. null is a primitive value and you can assign null to any variable. null is not an object, it is a primitive value.

// What are the differences between == and ===?
// The simplest way of saying that, == will not check types and === will check whether both sides are of same type. So, == is tolerant. But under the hood it converts to its convenient type to have both in same type and then do the comparison.

// How would you compare two objects in JavaScript?
// JavaScript has two different approaches for testing equality. Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and user defined objects are compared by their reference. This means it compares whether two objects are referring to the same location in memory.
// Equality check will check whether two objects have same value for same property. To check that, you can get the keys for both the objects. If the number of properties doesn't match, these two objects are not equal. Secondly, you will check each property whether they have the same value. If all the properties have same value, they are equal.
function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

// Is 'false' is false?
// No. Because, it's a string with length greater than 0. Only empty string is false.

// Is ' ' is false?
// No. Because, it's not an empty string. There is a white space in it.

// What about {}?
// true. It's an object. An object without any property is an object can't be falsy.

// Tell me about []?
// This is also truthy. It's an array object (array is child of object) is truthy.

// You talked bout '' to be falsy. What about new String('')?
// Though you are passing empty string to the string constructor, it is creating an String object. More precisely a instance of String object. It becomes an object. Hence, it is not false. so, it is truthy.

// Tell me about new Boolean(false)
// truthy. As it creates an instance of the Boolean object which is an object. Object is truthy.

// Boolean(function(){})
// true if you pass a truthy value to Boolean, it will be true.

// Boolean(/foo/)
// true

// true%1
// 0. When you are trying to find reminder of true, true becomes 1 and reminder of 1 while dividing by 1 is 0. you will get same result if you doe false%1

// ''%1
// 0

// As [] is true, []==true should also be true. right?
// You are right about first part, [], empty array is an object and object is always truthy. Hence, if you use if([]){console.log('its true')} you will see the log.
// However, special case about == (double equal) is that it will do some implicit coercion.
// Since left and right side of the equality are two different types, JavaScript can't compare them directly . Hence, under the hood, JavaScript will convert them to compare. first right side of the equality will be cooereced to a number and number of true would be 1.
// After that, JavaScript implementation will try to convert [] by usingtoPrimitive (of JavaScript implementation). since [].valueOf is not primitive will use toString and will get ""
// Now you are comparing "" == 1 and still left and right is not same type. Hence left side will be converted again to a number and empty string will be 0.
// Finally, they are of same type, you are comparing 0 === 1 which will be false.

// How could you write a method on instance of a date which will give you next day?
Date.prototype.nextDay = function(){
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate +1));
}

// If i have a var str = 'hello world', how could i get str.reverse() return 'dlrow olleh'?
str.split('').reverse().join('')

// How could you make this work [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]?
arr.concat(arr);

// If you want to use an arbitrary object as value of this, how will you do that?
// bind, call or apply

// If an older browser dont have bind function, how will you shim it?
Function.prototype.bind = Function.prototype.bind || function(context){
  var self = this;
  return function(){
    return self.apply(context, arguments);
  };
}

// Write a simple function to tell whether 2 is passed as parameter or not?
function isTwoPassed(){
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}

// How could you use Math.max to find the max value in an array?
// Function.prototype.apply() allows you to call a function with a given this value and an array of arguments.
var numbers = [1, 2, 3, 4];
// Math.max.apply(null, numbers) // 4
// Passing the numbers array as the second argument of apply() results in the function being called with all values in the array as parameters.
// A simpler, way of accomplishing this is with the new spread operator.
// var numbers = [1, 2, 3, 4];
Math.max(...numbers)

// What the heck is this in JavaScript?
// At the time of execution of every function, JavaScript engine sets a property to the function called this which refer to the current execution context. this always refers to an object and depends on how the function is called. There are 7 different cases where the value of this varies.
// In the global context or inside a function this refers to the window object.
// Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined. To pass access window inside IIFE with "use strict", you have to pass this.
// While executing a function in the context of an object, the object becomes the value of this
// Inside a setTimeout function, the value of this is the window object.
// If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
// You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
// For dom event handler, value of this would be the element that fired the event

// How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"?
// Just get the arguments, convert it to an array and unshift whatever prefix you want to set. Finally, use apply to pass all the arguments to console.
function log(){
  var args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');
  console.log.apply(console, args);
}

// What will you see in the console for the following example?
// var a = 1; 
// function b() { 
//     a = 10; 
//     return; 
//     function a() {} 
// } 
// b(); 
// console.log(a);          
// 1
// Explanation:
// function declaration function a(){} is hoisted(Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution) first and it behaves like var a = function () {};. Hence in local scope variable a is created.
// If you have two variables with same name (one in global another in local), local variable always get precedence over global variable.
// When you set a = 10;, you are setting the local variable a , not the global one. Hence, the value of global variable remain same and you get, 1 in the log.
// Extra: If you didnt have a function named as "a", you will see 10 in the log.

// Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?
//for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);  
//     }, 10);
// }
// Answer: The above will not output the numbers 0 through 9, but will simply print the number 10 ten times.
// Explanation: The console log is inside the anonymous function of setTimeout and setTimeout is executed when current call stack is over. So, the loop finishes and before setTimeout get the chance to execute. However, anonymous functions keep a reference to i by creating a closure. Since, the loop is already finished, the value i has been set to 10. When setTimeout use the value of i by reference, it gets the value of i as 10. Hence, you see 10 ten times.
// Solution: You can fix it by avoiding closure. Just create a IIFE (Immediately Invoked Function Expression), it will create its own scope and you can pass i to the function. In that case i will be a local variable (will not refer to i in the closure) and value of the i in every loop will be preserved.
for(var i = 0; i < 10; i++) {
    setTimeout((function(i) {
      console.log(i);
    })(i), 10)
}

// Look at the code below, I have a property in a object and I am creating a new object where I am setting it to a new value. If I delete that property what will i get if I try to access that property?
//var myObject = {
//     price: 20.99,
//     get_price : function() {
//         return this.price;
//     }
// };
// var customObject = Object.create(myObject);
// customObject.price = 19.99;
// delete customObject.price;
// console.log(customObject.get_price());
// Answer: You will see 20.99
// Explanation: This is very interesting question. When you create object.create(myObject) you are creating new object where the myObject will be the parent of the newly created object. Hence the price property will be at the parent.
// When you are assigning some value to customObject.price, you are creating a new property on the child. This means, when you delete customObject.price it deletes the price property in the customObject (in the child). However, when you call the method getprice, first it looks for this.price in the child since the customObject doesn't have price property, JavaScript executor walks through the prototype chain towards the parent. Since customObject was inherited from myObject and myObject has a price property, the get_price method returns the price from parent. Hence, you are getting 20.99

// Does JavaScript pass parameter by value or by reference?
// Primitive type (string, number, etc.) are passed by value and objects are passed by reference. If you change a property of the passed object, the change will be affected. However, you assign a new object to the passed object, the changes will not be reflected.

// How could you implement cache to save calculation time for a recursive fibonacci function?
// You could use poor man's memoization with a global variable. If fibonacci is already calculated it is served from the global memo array otherwise it is calculated.
var memo = [];
function _fibonacci(n) {
   if(memo[n]){    
    return memo[n];
   }
   else if (n < 2){
     return 1;
   }else{
     fibonacci(n-2) + fibonacci(n-1);
   }
}

// How could you cache execution of any function?
// You could have a method where you will pass a function and it will internally maintain a cache object where calculated value will be cached. When you will call the function with same argument, the cached value will be served.
function cacheFn(fn) {
    var cache={}
    return function(arg){
        if (cache[arg]){
           return cache[arg];
        }
        else{
           cache[arg] = fn(arg);
            return cache[arg];
        }
    }
}

// If you need to implement the following chaining with call back, how will you implement it?

// How could you implement moveLeft animation?

// How would you implement currying for any functions?
// Curring is partial invocation of a function. Currying means first few arguments of a function is pre-processed and a function is returned. The returning function can add more arguments to the curried function. It's like if you have given one or two spice to the curry and cooked little bit, still you can add further spice to it. A simple example will look like-
// function addBase(base){
//   return function(num){
//     return base + num;
//   }
// }
// var addTen = addBase(10);
// addTen(5); //15
// addTen(80); //90
// addTen(-5); //5    
// Explanation: You are creating a closure that return a function. When you are curring with a new number, new number is added to the base you have provided.
// Answer: You can add a curry method to the prototype of Function. If now parameters is passed to curry, you simply return the current function. If you have provided arguments to curry there are two steps
// Step-1: Concatenate old arguments (provided while creating curry), with new arguments (added after cooking little bit) by using args.concat(toArray(arguments))
// Step-2: Pass all the arguments to the function by using apply.
// Extra: Just be careful to retain the value of this.