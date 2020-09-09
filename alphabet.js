// Have the function alphabetSoup(str) take the str string 
// parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

 
// WORKING FUNCTION
function sortLetters(str){
  let arr = str.split('');
  arr.sort();
  return arr.join('');
}

console.log(sortLetters("hello dude"));


// Can also be written this way
// let arr = str.split('');
// let sort = arr.sort();