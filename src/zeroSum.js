const zeroSum  = numbers => {
  let flag = false;
  numbers.forEach((firstNum, i)=>{
    numbers.forEach((secNum, j)=>{
      if(i!==j){
        let sum = firstNum + secNum;
        if(sum === 0){
          flag = true;
          return flag;
        }
      }
    })
    if(flag === true){
      return flag;
    }
  })
  return flag;
}
