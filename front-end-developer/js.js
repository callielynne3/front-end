// JS Questions:

// Explain event delegation.
// When an event is fired from an element, the event will be bubbled up to its parent nodes. However, the original element where the event occurs, called 'target', stays the same in the event object. Using the target property, we can always keep tracking which element actually causes an event captured by its parent, and it can help use reduce the number of event handlers as we sometimes don't need to add event listeners for every element.

// Explain how this works in JavaScript.
// At the time of execution of every function, JavaScript engine sets a property to the function called this which refer to the current execution context. this is always refer to an object and depends on how function is called. There are 7 different cases where the value of this varies.
// In the global context or inside a function this refers to the window object.
// Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined. To pass access window inside IIFE with "use strict", you have to pass this.
// While executing a function in the context of an object, the object becomes the value of this
// Inside a setTimeout function, the value of this is the window object.
// If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
// You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
// For dom event handler, value of this would be the element that fired the event

// Explain how prototypal inheritance works.

// What do you think of AMD vs CommonJS?

// Explain why the following doesn't work as an IIFE: function foo(){ }();.

// What needs to be changed to properly make it an IIFE?

// What's the difference between a variable that is: null, undefined or undeclared?
// undefinded means that the variable's value is in fact not defined and null means nothing, so a variable can be set to nothing and then passed a value later on

// How would you go about checking for any of these states?

// What is a closure, and how/why would you use one?

// What's a typical use case for anonymous functions?

// How do you organize your code? (module pattern, classical inheritance?)

// What's the difference between host objects and native objects?
// Host objects: what an environment(browser, Node.js, etc) provides
// Native objects: what JavaScript provides

// Difference between: function Person(){}, var person = Person(), and var person = new Person()?
// constructor function, 

// What's the difference between .call and .apply?

// Explain Function.prototype.bind.

// When would you use document.write()?

// What's the difference between feature detection, feature inference, and using the UA string?
// Feature detection: directly check if a feature is implemented
// if (Promise) {
//   let a = Promise.resolve('hello');
// }
// Feature inference: infer if a feature is implemented by checking other properties
// if (MozSmsMessage) {
//   // guess it must be Firefox...
// }
// UA string: UA stands for UserAgent, which a browser natively exposes to scripts and HTTP header
// console.log(navigator.userAgent); // "Mozilla/5.0 (Macintosh; ..."

// Explain AJAX in as much detail as possible.
// asyncronous javscript - 

// Explain how JSONP works (and how it's not really AJAX).
// A JSONP response contains a callback function usually written in JavaScript, and when the response is flushed, the callback will be launched. It's more like script tag injection, rather than AJAX.

// Have you ever used JavaScript templating?

// If so, what libraries have you used?

// Explain "hoisting".

// Describe event bubbling.
// It's when an event is bubbled into container elements, in the higher level of a DOM tree.

// What's the difference between an "attribute" and a "property"?
// Attribute: specified in HTML, always in the form of string
// Property: specified in DOM object, can have any type of JavaScript

// Why is extending built-in JavaScript objects not a good idea?

// Difference between document load event and document ready event?
// document load: when a HTML document and assets in the document are all loaded and rendered
// document ready: when a HTML document is loaded and rendered

// What is the difference between == and ===?
// == compares value but does not check type whereas === checks type and value

// Explain the same-origin policy with regards to JavaScript.
// Same-origin means having same host, port and protocol(HTTP or HTTPS). If a script in the different origin should be accessed, we can consider using CORS.

// Make this work:
// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
// let duplicate = (arr) => arr.concat(arr);

// Why is it called a Ternary expression, what does the word "Ternary" indicate?

// What is "use strict";? what are the advantages and disadvantages to using it?
// strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.
// Strict mode makes several changes to normal JavaScript semantics. First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
// Advantages:
// Cannot assign a value to an undefined global variable
// Fire TypeError for not-allowed assignments
// this in a normal function refers to undefined, instead of global
// In short, it secures JavaScript.
// Disadvantage:
// When using global strict mode and concatenating the script with other scripts not using strict mode, the other scripts can be broken.

// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
var num = 0;
for(num in 100){
  if(num % 3){
     console.log('fizz');
  } else if(num % 5){
    console.log('buzz');
  } else(num % 3 && 5){
    console.log('fizzbuzz');
  }
}
// Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

// Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

// Explain what a single page app is and how to make one SEO-friendly.

// What is the extent of your experience with Promises and/or their polyfills?

// What are the pros and cons of using Promises instead of callbacks?

// What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?