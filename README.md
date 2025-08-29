1. Differences Between getElementByID,getElementsByClassName, and querySelector / querySelectorAll:
getElementByID: return an element with given ID
getElementsByClassName: retrurns live html collections with that class.
querySelector: return the first element matching a CSS selector.
querySelectorAll: returns a nodelist of all matching elements.


2.let divison = document.createElement("div");  
divison.textContent = "Hello World!";  
document.body.appendChild(divison);


3.It means an event starts from the targeted element and goes through its ancestors.

4. Event Delegation is attaching one event listener on the parent element.
   It is usefull bacause it saves memory.
   handles dynamically added child elements automatically.

5. preventDefault() -  prevents the default action of an event
   stopPropagation()-  stops the event floe.



