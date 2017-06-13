// DOM related Questions

// Is there any difference between window and document?
// Yes. JavaScript has a global object and everything runs under it. window is that global object that holds global variables, global functions, location, history everything is under it. Besides, setTimeout, ajax call (XMLHttpRequest), console or localStorage are part of window.
// document is also under window. document is a property of the window object. document represents the DOM and DOM is the object oriented representation of the html markup you have written. All the nodes are part of document. Hence you can use getElementById or addEventListener on document. These methods are not present in the window object.

// Does document.onload and window.onload fire at the same time?
//  window.onload is fired when DOM is ready and all the contents including images, css, scripts, sub-frames, etc. finished loaded. This means everything is loaded.
// document.onload is fired when DOM (DOM tree built from markup code within the document)is ready which can be prior to images and other external content is loaded.

// Is attribute similar to property?
// attributes are just like attribute in your html tag (XML style attribute) inside the starting tag. html attributes are exposed to the DOM via property. Hence, a property is created when DOM is parsed for each attribute in the html tag. If you change an attribute only the value of the property will change. However, the value of attribute will remain same.

// What are the different ways to get an element from DOM?
// You can use the following methods in document:
// getElementById to get a element that has the provided Id.
// getElementsByClassName to get a nodelist (nodelist is not an array, rather it is array-like object) by providing a class name.
// getElementsByTagName to get a nodelist by the provided tag name.
// querySelector you will pass css style selector (jquery style) and this will retrurn first matched element in the DOM.
// querySelectorAll will return a non-live nodelist by using depth-first pre order traversal of all the matched elements. Non-live means, any changes after selecting the elements will not be reflected.
// getElementsByName returns the list of elements by the provided name of the html tag
// getElementsByTagNameNS returns elements with particular tag name within the provided namespace

// What is the fastest way to select elements by using css selectors?
//  It depends on what you are selecting. If you have an ID of an element getElmentById is the fastest way to select an element. However, you should not have so many ID in you document to avoid style repetition. css class getElementsByClassName is the second quickest way to select an element
// Here is the list. As we go downwards through the list, it takes more time to select elements.
// ID (#myID)
// Class (.myClass)
// Tag (div, p)
// Sibling (div+p, div~p)
// child (div>p)
// Descendant (div p)
// Universal (*)
// Attribute (input[type="checkbox"])
// Pseudo (p:first-child)

// How come, I can't use forEach or similar array methods on a NodeList?
// Both array and nodeList have length and you can loop through elements but they are not same object.
// Both are inherited from Object. However array has different prototype object than nodeList. forEach, map, etc are on array.prototype which doesn't exist in the NodeList.prototype object. Hence, you don't have forEach on a nodeList
// myArray --> Array.prototype --> Object.prototype --> null
// myNodeList --> NodeList.prototype --> Object.prototype --> null
// Question: How could you solve this problem?
// Answer: To solve this problem, you can simply loop through a nodeList and do whatever you wanted to inside forEach or you can call method on array to convert nodelist to an array. After that you will have access to all array.prototype methods
// var myNodeList = document.querySelectorAll('.my-class');
// var nodesArray = Array.prototype.slice.call(myNodeList);
// //use array method on nodeList
// nodesArray.forEach(function(el, idx){
//   console.log(idx, el);
// });

// If you need to implement getElementByAttribute, how would you implement it?
// First, get all the elements in the DOM. You can either get it by Tag Name '*' and then check whether they have the particular attribute. In this case, even if attribute is null that will be captured. If you need to check the value, you should be able to do it by passing one extra parameter and comparing it in the if block.
// function getElementsByAttribute(attribute){
//   var allElements = document.getElementsByTagName('*'), 
//       elm,
//       found=[];
//   for (var i = 0; i < allElements.length; i++)
//    {
//     elm = allElements[i];
//     if (elm.getAttribute(attribute))
//     {
//       found.push(elm);
//     }
//   }
//   return found;
// }

// How would you add a class to an element by query selector?
// Very simple. Just get the element and add the classname to the classlist.
// function addClass(selector, className){
//    var elm = document.querySelector(selector);
//    if (elm){
//       elm.classList.add(className);
//    }
// }

// How could I verify whether one element is child of another?
//  First check whether the passed parent is the direct parent of the child. If not, keep moving upward to the root of the tree.
// function isDescendant(parent, child){ 
//   while(child.parentNode ){ 
//     if(child.parentNode == parent)
//       return true;
//     else
//       child = child.parentNode;
//   }
//   return false;
// }

// What is the best way to create a DOM element? Set innherHTML or use createElement?
// When you set innerHTML property, browser removes all the current children of the elements. Parse the string and assign the parsed string to the element as children.
// For example, if you want to add a list item to an unorderedList. You can get the element and set the innerHTML of the element like
// var ul = document.getElementById('myList');
// el.innerHTML = '<li>Only one item</li>';              
// Extra Credit: innerHTML could be slow while parsing a string. Browser has to deal with the string and if you have crappy html (invalid html).
// appendChild
// On the other hand, while using appendChild, you create a new Element. Since you are creating it, browser doesnt have to parse string and there is no invalid html. And you can pass the child to the parent and child will be appended to the parent.
// var li = document.createElement("li");
// var text = document.createTextNode('Only one Item');
// li.appendChild(text);
// ul.appendChild(li);

// What is createDocumentFragment and why you might use it?
// documentFragment a very lightweight or minimal part of a DOM or a subtree of a DOM tree. It is very helpful when you are manipulating a part of DOM for multiple times. It becomes expensive to hit a certain portion of DOM for hundreds time. You might cause reflow for hundred times. Stay tuned for reflow.
// If you are changing dom that cause expensive reflow, you can avoid it by using documentFragment as it is managed in the memory.
// //bad practice. you are hitting the DOM every single time
// var list = ['foo', 'bar', 'baz', ... ],
//     el, text;
// for (var i = 0; i < list.length; i++) {
//     el = document.createElement('li');
//     text = document.createTextNode(list[i]);
//     el.appendChild(text);
//     document.body.appendChild(el);
// }
// //good practice. you causing reflow one time
// var fragment = document.createDocumentFragment(),
//     list = ['foo', 'bar', 'baz', ...],
//     el, text;
// for (var i = 0; i < list.length; i++) {
//     el = document.createElement('li');
//     text = document.createTextNode(list[i]);
//     el.appendChild(text);
//     fragment.appendChild(el);
// }
// document.body.appendChild(fragment);

// What is reflow? What causes reflow? How could you reduce reflow?
// When you change size or position of an element in the page, all the elements after it has to change their position according to the changes you made. For example, if you change height on an element, all the elements under it has to move down in the page to accomodate a change in height. Hence, flow of the elements in the page is changed and this is called reflow.
// Why reflow is bad: Reflows could be very expensive and it might have a performance hit specially in the smaller devices like phone. As it might causes changes in the portion (or whole) layout of the page.
// Show more explanation
// Reasons to reflow: The following cases causes reflow
// change layout (geometry of the page)
// resize the window
// change height/width of any element
// changing font
// change font size
// move DOM element (animation)
// adding or removing stylesheet
// calculating offset height or offset width
// display: none;
// How to avoid: To avoid reflow, try to avoid doing things in the above list and some more in the below
// avoid setting multiple inline style
// apply animation to the elements that are positioned fixed or absolute
// avoid tables for layout

// What is repaint and when does this happen?
// use repaint over reflow
//  repaint happens when you change the look of an element without changing the size and shape. This doesn't cause reflow as geometry of the element didn't changed.
// How it happens:
// change background color
// change text color
// visibility hidden

// How could you make sure to run some JavaScript when DOM is ready like $(document).ready?
// option-1: Put your script in the last tag of html body element. DOM would be ready by the time browser hits the script tag.
// option-2: Place your code inside a DOMContentLoaded handler. This event will be fired when DOM is completely loaded.
// document.addEventListener('DOMContentLoaded', function(){   
//    //put your script here
// });
// option-3: Watch changes in the readyState of the document. And the last state is "complete" state, you can put your code there.
// document.onreadystatechange = function () {  
//   if (document.readyState == "complete") {
//     //put your script here
//   }
// }  
// option-4: Search jquery source code and copy dom ready function. In that case you have a ready function that works in the older browsers as well without loading the whole jquery library.

// What is event bubble? How does event flows in DOM?
//To understand event bubble, you have to understand what happen when you click on anything on a page.
// Where you clicked: If you have a table with multiple rows and multiple columns and you click in one of the cell
// You will think that you have clicked on the cell and browser will know that you have a click handler with the cell that will be fired immediately.
// You are completely wrong. Right away, browser doesn't know where you have clicked.
// The way browser find out where you have clicked are as follows-
// Capture: When you clicked, browser knows a click event occurred. It starts from the window (lowest level/root of your website), then goes to document, then html root tag, then body, then table... its trying to reach the the as lowest level of element as possible. This is called capture phase (phase -1).
// Target: When browser reach the lowest level of element. In this case, you have clicked on a table cell (table data) hence target would be "td" tag. Then browser checks whether you have any click handler attached to this element. If there is any, browser executes that click hander. This is called target phase (phase -2).
// Bubbling: After firing click hander attached to "td", browser walks toward root. One level upward and check whether there is any click handler attached with table row ("tr" element). If there is any it will execute that. Then it goes to tbody, table, body, html, document, window. In this stage its moving upward and this is called event bubbling or bubbling phase (phase-3). Please note that, you clicked on cell but all the event handler with parent elements will be fired. This is actually very powerful (check event delegation)

// How would you destroy multiple list items with one click handler?
// If you have one hundred list items that have similar event to handle. You can write one hundred event handler (actually copy paste) same code in 99 places. This works but if something changes in the event handler, you have to change in one hundred places. This doesn't call job security. This is called screwed up.
// Second problem is if you want to dynamically add a new element, you have to make sure event handler is attached with the new element. More JavaScript code!
// Answer: We can actually leverage event bubbling. You can have only one event handler attached to the parent element of one hundred list items. In this case, you can attach the event handler to the "ul" tag. After you click on a list item (list item does not have an event), event will bubble and "ul" has a handler. That handler will be fired.
// <ul id="listToDestroy">
//     <li><a href="#">first item</a></li>
//     <li><a href="#">second item</a></li>
//     <li><a href="#">third item</a></li>
//     <li><a href="#">forth item</a></li>
//     <li><a href="#">Fifth item</a></li>
// </ul>
// document.getElementById('listToDestroy').addEventListener('click', function (e) { 
//     var elm = e.target.parentNode; 
//         elm.parentNode.removeChild(elm);
//         e.preventDefault();
// });

// Create a button that is destroyed by clicking in it but two new buttons are created in it's place.
// One way of solving is to attach a event handler with the button to destroy itself and append two. However, we can leverage event delegate. If we attach the event hander to the parent div instead of the button itself. We don't have to add the event handler to each button we create. So, we will take advantage of event bubbling.
// Try to be Smart: If both the newly created button is identical to one we are destroying, why interviewer wants to destroy exactly similar one and then create one. Why not just add one. And end result would be same, you will have two two buttons.
// Interviewer: I just want to see whether you can destroy any element. Make sure when you are destroying, there is no reference to the element, otherwise, you will have memory leak. If interviewer, says ok, just create one more button on click, then use your brain to change the following code.
// <div id="doubleHolder">
//   <button class="double">double</button>
// </div>
// document.getElementById('doubleHolder').addEventListener('click', function (e) {   
//    if(e.target.classList.contains('double')){
//       var btn = document.createElement('button');
//       btn.setAttribute('class', 'double');
//       btn.innerHTML = 'double';
//       var btn2 = document.createElement('button');
//       btn2.setAttribute('class', 'double');
//       btn2.innerHTML = 'double';
//       this.appendChild(btn);
//       this.appendChild(btn2);
//       this.removeChild(e.target);   
//     }
//   });

// How could you capture all clicks in a page?
// You can leverage, event bubble to capture all the clicks. As all the clicks will be bubbled up to the body.
// document.querySelector('body').addEventListener('click', function(e){
//   console.log('body clicked', e.target);
// });
// //or
// window.onclick =function(e){
//   console.log('someone clicked', e.target)
// }

// How can you get all the texts in a web page?
// The easiest way to get all the text is to get the innerText of body tag.
// document.body.innerText;

// What is defer and async keyword does in a script tag?
// HTML parser will ignore defer and async keyword for inline script (script that does not have a src attribute).
// normal: When you have a plain script tag (no defer or async keyword), parser will pause parsing, script would be downloaded and exectuted. After that parsing resume.
// defer: defer keyword in the script tag will defer the execution of the script. Hence script will be executed when DOM is available. Important point is, defer is not supported by all major major browsers.
// async: If possible, set the execution of the script, asynchronously. async keyword has no effect on inline script.

// 10 rapid fire questions
    // Question: How could you prevent a click on an anchor from going to the link?
    // Answer: preventDefault() inside event handler. However, this doesnt stop further propagation.

    // Question: How could you stop further propagation of an event?
    // Answer: Call event.stopPropagation();

    // Question: Can you remove an event handler from an element?
    // Answer: Yes. target.removeEventListener('click', handler)

    // Question: How could you run event handler in the capturing phase not in bubble phase?
    // Answer: There is a third (optional) parameter in addEventListener and removeEventLister. You can pass true or false to useCapture phase.

    // Question: How could you prevent multiple event handler to be fired for an event?
    // Answer: If event listeners are attached for the same type event (click, keydown, etc.) of an element for the same event type, you can call event.stopImmediatePropagation() in the first event handler. No other event handler will be executed.

    // Question: What are the cancelable events?
    // Answer: Go to wiki find the right most column cancelable.

    // Question: How could I check whether an event is cancelable or not?
    // Answer: Use event.cancelable to get true or false return. However, you have to preventDefault() to prevent the    event.

    // Question: Is there anything you have to be careful when using node.cloneNode()?
    // Answer: While cloning, make sure you didnt duplicate ID.

    // Question: What are different nodeTypes?
    // Answer: ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE(8), DOCUMENT_NODE(9), DOCUMENT_TYPE_NODE(10), DOCUMENT_FRAGMENT_NODE(11), etc.

    // Question: What are the differences between node and element?
    // Answer: A node is the generic name for any type of object in the DOM hierarchy. A node could be one of the built-in DOM elements such as document or document.body, it could be an HTML tag specified in the HTML such as <input> or <p> or it could be a text node that is created by the system to hold a block of text inside another element. So, in a nutshell, a node is any DOM object.
    // An element is one specific type of node as there are many other types of nodes (text nodes, comment nodes, document nodes, etc...).
    // The DOM consists of a hierarchy of nodes where each node can have a parent, a list of child nodes and a nextSibling and previousSibling. That structure forms a tree-like hierarchy. The document node would have its list of child nodes (the head node and the body node). The body node would have its list of child nodes (the top level elements in your HTML page) and so on.
    // So, a nodeList is simply an array-like list of nodes.
    // An element is a specific type of node, one that can be directly specified in the HTML with an HTML tag and can have properties like an id or a class. can have children, etc... There are other types of nodes such as comment nodes, text nodes, etc... with different characteristics. Each node has a property .nodeType which reports what type of node it is. You can see the various types of nodes here (diagram from MDN): enter image description here
    // You can see an ELEMENT_NODE is one particular type of node where the nodeType property has a value of 1.
    // So document.getElementById("test") can only return one node and it's guaranteed to be an element (a specific type of node). Because of that it just returns the element rather than a list.
    // Since document.getElementsByClassName("para") can return more than one object, the designers chose to return a nodeList because that's the data type they created for a list of more than one node. Since these can only be elements (only elements typically have a class name), it's technically a nodeList that only has nodes of type element in it and the designers could have made a differently named collection that was an elementList, but they chose to use just one type of collection whether it had only elements in it or not.