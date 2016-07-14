//Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long. For an added challenge, try for O(n).
//quadratic time
// function wordsWithinWords (wordList) {
//   var most=0;
//   var wordMost;
//   wordList.forEach(function(word, i){
//     var count=0;
//     wordList.forEach(function(subWord, j){
//       if(i!==j){
//         if(word.indexOf(subWord) > -1){
//           count++;
//         }
//       }
//     });
//     if (count>most){
//       most = count;
//       wordMost=word;
//     }
//   })
//   return wordMost
// }

//linear time (in regards to number of words)
function wordsWithinWords(wordList){
  //turn wordList array into an object (with words as keys) to do lookups in constant time
  var wordObject = wordList.reduce(function(acc, curr){
    acc[curr]=true;
    return acc;
  }, {});
  //find all substrings in a word and check if that word is in the object (object lookup = constant time)
  var subStringCount = wordList.map(function(word){
    var count = 0;
    //two for loops = quadratic time, but only in regards to the number of letters in a word
    //stop at word.lenght-1 to avoid j > word.length
    for(var i=0; i<word.length-1; i++){
      //stop at word.length+1 because string.prototype.substring(i,j) does not include j
      for(var j=i+1; j<word.length+1; j++){
        //create a substring from i to j in the word
        var subString = word.substring(i,j)
        if(wordObject[subString]){
          count++;
        }
      }
    }
    return [word, count-1];
  });

  //return the word with the largest count
  return subStringCount.reduce(function(acc, curr){
    if(curr[1]>acc[1]){
      return curr;
    }
    return acc;
  }, ['', 0])[0] || wordList[0];
}
