// Create a function that will receive a string of text of any length and return the number of vowels found within the text.

// 

let vowels = [a,e,i,o,u]

function findVowels (str) {
  let vowels = [a,e,i,o,u];
  let count = 0;

  for(var i = 0; i < str.length; i++) 
  {
    if (vowels.indexOf(str[i] !== -1)
   {
     count =+1;
   }
  return count;
}

console.log(findVowels("hello there"));