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
// Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.
// When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property (referred to as [[Prototype]] ) which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
// Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.
// While this is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model is in fact more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.

// What do you think of AMD vs CommonJS?

// Explain why the following doesn't work as an IIFE: function foo(){ }();.

// What needs to be changed to properly make it an IIFE?

// What's the difference between a variable that is: null, undefined or undeclared?
// undefinded means that the variable's value is in fact not defined and null means nothing, so a variable can be set to nothing and then passed a value later on

// How would you go about checking for any of these states?

// What is a closure, and how/why would you use one?
//a closure is one way of supporting first-class functions; it is an expression that can reference variables within its scope (when it was first declared), be assigned to a variable, be passed as an argument to a function, or be returned as a function result. Or
// a closure is a stack frame which is allocated when a function starts its execution, and not freed after the function returns (as if a 'stack frame' were allocated on the heap rather than the stack!).

// What's a typical use case for anonymous functions?
// pass them as arguments to other functions and create closures

// How do you organize your code? (module pattern, classical inheritance?)

// What's the difference between host objects and native objects?
// Host objects: what an environment(browser, Node.js, etc) provides
// Native objects: what JavaScript provides

// Difference between: function Person(){}, var person = Person(), and var person = new Person()?
// constructor function, 

// What's the difference between .call and .apply?
// apply function in particular allows us to execute a function with an array of parameters, such that each parameter is passed to the function individually when the function executes
// The apply and call methods are almost identical when setting the this value except that you pass the function parameters to apply () as an array, while you have to list the parameters individually to pass them to the call () method

// Explain Function.prototype.bind.
// We use the Bind () method primarily to call a function with the this value set explicitly. It other words, bind () allows us to easily set which specific object will be bound to this when a function or method is invoked.
// This might seem relatively trivial, but often the this value in methods and functions must be set explicitly when you need a specific object bound to the function’s this value.
// The need for bind usually occurs when we use the this keyword in a method and we call that method from a receiver object; in such cases, sometimes this is not bound to the object that we expect it to be bound to, resulting in errors in our applications.
// Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the funciton immediately, and modify the context.
// Call/apply call the function immediately, whereas bind returns a function that when later executed will have the correct context set for calling the original function. This way you can maintain context in async callbacks, and events.
// Using bind is also super useful with React.js. For example - you can use it to bind your click events to any further information they may need.
// Another useful example is when you’re passing functions down to child components. You can bind data to these functions so that the child components don’t have to worry about invoking the function with a particular piece of data

// When would you use document.write()?
//The write() method writes HTML expressions or JavaScript code to a document.
// The write() method is mostly used for testing: If it is used after an HTML document is fully loaded, it will delete all existing HTML.

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
// Simply put, AJAX is the use of JavaScript to send and receive using HTTP without reloading the page. AJAX is an acronym for asynchronous JavaScript and XML, and is used as a technique for creating client-side asynchronous web applications.

// Explain how JSONP works (and how it's not really AJAX).
// A JSONP response contains a callback function usually written in JavaScript, and when the response is flushed, the callback will be launched. It's more like script tag injection, rather than AJAX.

// Have you ever used JavaScript templating?
// If so, what libraries have you used?
// jquery + react

// Explain "hoisting"
// In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// Describe event bubbling.
// It's when an event is bubbled into container elements, in the higher level of a DOM tree.

// What's the difference between an "attribute" and a "property"?
// Attribute: specified in HTML, always in the form of string
// Property: specified in DOM object, can have any type of JavaScript

// Why is extending built-in JavaScript objects not a good idea?
//What is “extending an object”? When you add functionality to an object using the prototype
//The main argument against doing this is: if, in future, a browser decides to implement its own version of your method, your method might get overridden (silently) and the browser’s implementation (which is probably different from yours) would take over. So not extending in the first place is future proofing your code.

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
// composed of three parts
// condition ? expr1 : expr2  ==> evaluated to true or false

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
//It’s harder to read the code and reason about it when variables seem to appear out of thin air (but really from the global scope).
// Anyone can update a global variable from any point in the program at any time (and from any thread if there’s more than one going).
// General code smell - if you're too lazy to put the variable only where it needs to be then what other corners are you cutting?
// It’s probable that you'll encounter global variable name clashes. Since there’s only one namespace you're more likely to double up on a variable name.
// Global variables are particularly bad for JS.
// Not only are all of those points above true (and a few others I didn’t include), but for JS specifically global variables can be particularly problematic. This is because JS defaults all variables to the global scope unless they are explicitly defined elsewhere.

// Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

// Explain what a single page app is and how to make one SEO-friendly.
// Single-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML5 to create fluid and responsive Web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.
//Reduced amount of page reloads!
// bad for seo beacuse: url parameters, and same html being loaded all the time

// What is the extent of your experience with Promises and/or their polyfills?
// A promise can be:
// fulfilled - The action relating to the promise succeeded
// rejected - The action relating to the promise failed
// pending - Hasn't fulfilled or rejected yet
// settled - Has fulfilled or rejected
// The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject.
// At their most basic, promises are a bit like event listeners except:
// A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
// If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.
// This is extremely useful for async success/failure, because you're less interested in the exact time something became available, and more interested in reacting to the outcome.

// What are the pros and cons of using Promises instead of callbacks?
//Promises solve the problem of call back hell. Call back can really be nasty sometimes and it drastically reduces the maintainability of the code. 

// What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
// Advantages:
// Classes. Many (most?) transpiled languages give you classes, inheritance and sometimes interfaces. The common rebuttal to this is that it’s just syntax sugar and you’ve still got JS prototypical inheritance under the hood, but that misses the point: classes are always syntax sugar. A C++ compiler isn’t generating some magic OOP machine code, it is generating standard procedural assembly code. A transpiled language is just doing the same but emitting JS instead.
// Types. JS vague typing and type guessing (“inference”) is a menace with a large code base. Half the unit tests in existence are there to try and plug the inability of JS to allow you to define what you mean. Most transpiled languages fix this to one degree or another thereby giving you a lot of your test suite by default and eliminating bugs before they happen. This is really why TypeScript exists.
// Features: JS evolves quite slowly in terms of browser implementation. If you want to use ES6 features you need to transpile to ES5 anyway. TypeScript 2 is probably ES7+ in many ways. Other languages bring other features.
// Disadvantages:
// You’ll probably need webpack or gulp to automate all your transpiling and bundling.
// The number of developers familiar with what you are doing is smaller.
// Can’t think of another one offhand.