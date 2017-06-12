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
// Date.prototype.nextDay = function(){
//   var currentDate = this.getDate();
//   return new Date(this.setDate(currentDate +1));
// }

// If i have a var str = 'hello world', how could i get str.reverse() return 'dlrow olleh'?
str.split('').reverse().join('')

// How could you make this work [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]?
arr.concat(arr);

// If you want to use an arbitrary object as value of this, how will you do that?

// If an older browser dont have bind function, how will you shim it

// Write a simple function to tell whether 2 is passed as parameter or not?

// How could you use Math.max to find the max value in an array?

// What the heck is this in JavaScript?
// At the time of execution of every function, JavaScript engine sets a property to the function called this which refer to the current execution context. this always refers to an object and depends on how the function is called. There are 7 different cases where the value of this varies.
// In the global context or inside a function this refers to the window object.
// Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined. To pass access window inside IIFE with "use strict", you have to pass this.
// While executing a function in the context of an object, the object becomes the value of this
// Inside a setTimeout function, the value of this is the window object.
// If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
// You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
// For dom event handler, value of this would be the element that fired the event

// How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"

// Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?

// Look at the code below, I have a property in a object and I am creating a new object where I am setting it to a new value. If I delete that property what will i get if I try to access that property?

// Does JavaScript pass parameter by value or by reference?

// How could you implement cache to save calculation time for a recursive fibonacci function?

// How could you cache execution of any function?

// If you need to implement the following chaining with call back, how will you implement it?

// How could you implement moveLeft animation?

// How would you implement currying for any functions?