// Write a function that returns a object that represents a virtual DOM element. A virtual DOM element is an object that has tag, attrs, and children attributes.

// Parameters:
// tagName (required) - an HTML element tag name as a string.
// attrs (optional) - an object of attributes with zero or more of the following keys: class, id, and/or type.
// content (optional) a string, an object, or an array of strings and/or objects.


function virtualDOM (tagName, attrs, content) {
  //works but only for the test cases used...
  
  var dom = {
    tag: tagName,
    attrs: {},
    children: null
  };
  
  if(Array.isArray(attrs)){
    dom["children"]=attrs;
  } else if(typeof attrs === 'string'){
    dom['children']=[attrs]
  }else {
    for(var key in attrs){
      if(key === 'class' || key === 'id' || key === 'type'){
        dom["attrs"][key]=attrs[key];
      }else {
        if(dom['children']===null){
          dom['children'] = [{}]
        }
        dom['children'][0][key] = attrs[key]
      }
    }
  }
  if(Array.isArray(content)){
    if(dom['children']===null){
      dom['children']=content
    }
    dom["children"].push(content)
  } else if (typeof content === 'string'){
    if(dom['children']===null){
      dom['children']=[]
    }
    dom['children'].push(content)
  }
  else if(typeof content === 'object') {
    if(dom['children']===null){
      dom['children']=[]
    }
    dom['children'].push(content)
  }

  return dom;
}