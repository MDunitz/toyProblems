function parseQueryString (url) {
  var output = [];
  var query = url.split('?');
  if(query[1] !==undefined){
    var data = query[1].split("=");
  }else{
    return undefined;
  }
  var add = []
  for(var i = 0; i<data.length; i++){
    var curr = data[i];
    if(i === 0 || i === data.length-1){
      add.push(decodeURIComponent(curr))
      if(add.length===2){
        output.push(add);
        return output;
      }
    }else{
      var more = curr.split('&');
      add.push(decodeURIComponent(more[0]));
      output.push(add);
      add = [decodeURIComponent(more[1])];
    }
  }
  return output;
}
