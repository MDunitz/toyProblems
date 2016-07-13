function zeroSum3(numbers){
  var flag = false;
  numbers.forEach(function(firstNum, i){
    var sum;
    numbers.forEach(function(secNum, j){
      if(i!==j){
        sum=firstNum + secNum;
        var toZero = numbers.indexOf(-1*sum);
        if(toZero > -1 && toZero !==i && toZero !==j){
          flag = true;
          return flag;
        }
      }
    })
  })
  return flag;
}
