//Given an array of negative/positive integers, return true if there exists three numbers whose sum is zero.


const zeroSum3 = numbers => {
  let flag = false;
  numbers.forEach(function(firstNum, i){
    let sum;
    numbers.forEach(function(secNum, j){
      if(i!==j){
        sum=firstNum + secNum;
        let toZero = numbers.indexOf(-1*sum);
        if(toZero > -1 && toZero !==i && toZero !==j){
          flag = true;
          return flag;
        }
      }
    })
  })
  return flag;
}
