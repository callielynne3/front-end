// DOM related Questions

// Is there any difference between window and document?
// Does document.onload and window.onload fire at the same time?
// Is attribute similar to property?
// What are the different ways to get an element from DOM?
// What is the fastest way to select elements by using css selectors?
// How come, I can't use forEach or similar array methods on a NodeList?
// If you need to implement getElementByAttribute, how would you implement it?
// How would you add a class to an element by query selector?
// How could I verify whether one element is child of another?
// What is the best way to create a DOM element? Set innherHTML or use createElement?
// What is createDocumentFragment and why you might use it?
// What is reflow? What causes reflow? How could you reduce reflow?
// What is repaint and when does this happen?
// How could you make sure to run some JavaScript when DOM is ready like $(document).ready?
// What is event bubble? How does event flows in DOM?
// How would you destroy multiple list items with one click handler?
// Create a button that is destroyed by clicking in it but two new buttons are created in it's place.
// How could you capture all clicks in a page?
// How can you get all the texts in a web page?
// What is defer and async keyword does in a script tag?
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