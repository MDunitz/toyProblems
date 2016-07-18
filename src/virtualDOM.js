// Write a function that returns a object that represents a virtual DOM element. A virtual DOM element is an object that has tag, attrs, and children attributes.

// Parameters:
// tagName (required) - an HTML element tag name as a string.
// attrs (optional) - an object of attributes with zero or more of the following keys: class, id, and/or type.
// content (optional) a string, an object, or an array of strings and/or objects.


function virtualDOM (tagName, attrs, content) {
  
  var dom = {
    tag: tagName,
    children: null
  };
  
  if(!attrs){
    dom['attrs'] = {};
  } else if (containsOnlyAttrs(attrs)){
    dom['attrs'] = attrs;
  }else {
    dom['attrs'] = {};
    children = setChildren(dom, attrs);
  }
  if(content){
    setChildren(dom, content)
  }
  console.log(dom);
  return dom;
}


function containsOnlyAttrs(attrs){
  attrAttributes = {id:true, class:true, type:true};
  for(var key in attrs){
    if(!(attrAttributes[key])){
      return false;
    }
  }
  return true;
}

function setChildren(node, child){
  if(node.children){
    node.children.push(child)
  } else if(Array.isArray(child)){
    node['children'] = child
  } else {
    node.children = [child];
  }
}




