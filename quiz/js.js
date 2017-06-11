// JS Questions

// "1" + 2 + "3" + 4;
// What does the above statement evaluate to?
// 1234

// 4 + 3 + 2 + "1"
// What does the above statement evaluate to?
// 91

// var foo = 1;
// function bar() {
//   foo = 10;
//   return;
//   function foo() {}
// }
// bar();
// alert(foo);
// What is alerted?
// 1

// function bar() {
//     return foo;
//     foo = 10;
//     function foo() {}
//     var foo = 11;
// }
// alert(typeof bar());
// What is alerted?
// function

// var x = 3;

// var foo = {
//     x: 2,
//     baz: {
//         x: 1,
//         bar: function() {
//             return this.x;
//         }
//     }
// }

// var go = foo.baz.bar;

// alert(go());
// alert(foo.baz.bar());
// What is the order of values alerted?
// 3, 1

// var x   = 4,
//     obj = {
//         x: 3,
//         bar: function() {
//             var x = 2;
//             setTimeout(function() {
//                 var x = 1;
//                 alert(this.x);
//             }, 1000);
//         }
//     };
// obj.bar();
// What value is alerted?
// 4

// x = 1;
// function bar() {
//     this.x = 2;
//     return x;
// }
// var foo = new bar();
// alert(foo.x);
// What value is alerted?
// 2

// function foo(a) {
//     alert(arguments.length);
// }
// foo(1, 2, 3);
// What value is alerted?
// 3

// var foo = function bar() {}; 
// alert(typeof bar);
// What value is alerted?
// undefinded

// var arr = [];
// arr[0]  = 'a';
// arr[1]  = 'b';
// arr.foo = 'c';
// alert(arr.length);
// What value is alerted?
// 2

// function foo(a) {
//     arguments[0] = 2;
//     alert(a);
// }
// foo(1);
// What value is alerted?
// 2

// function foo(){}
// delete foo.length;
// alert(typeof foo.length);
// What value is alerted?
// number 