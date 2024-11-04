var React = require("react");  

 
function createElement(content, tag = 'div', props = {}) {  
   
  return React.createElement(tag, props, content);  
}  
 
function createUnorderedList(list) {   
  
  const children = list.map((item, index) =>   
    React.createElement('li', { key: index }, item)  
  );  
 
  return React.createElement('ul', null, children);  
}  

 
const element1 = createElement('Hello World'); // <div>Hello World</div>  
const element2 = createUnorderedList(['apples', 'oranges', 'bananas']);  
