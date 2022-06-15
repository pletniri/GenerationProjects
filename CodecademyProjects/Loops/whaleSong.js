//this code is an assignment from Codecademy
const input = 'turpentine and turtles';
// create variable input with a string inside to separate vowels 
const vowels = ["a", "e", "i", "o", "u"];
// create a variable vowels with an array of vowels that we are looking for
let resultArray = [];
// variable resultArray where we are going to put all vowels 
//that we are going to find

for (let i = 0; i < input.length; i++) {
    //it is an outer loop. to separate vowels i create for loop that starts iterating from 0 ( i =0;)
    //goes through the lenght of the input string but no more (i < input.length), 
    //after each iteration counter gets +1 (i++) 
  if (input[i] === 'e') {
    // if while going through the string, i find vowel 'e' 
      resultArray.push(input[i]);
      // I store it in resultArray
    }
    if (input[i] === 'u') {
        //if going through the string, I find 'u'
      resultArray.push(input[i]);
      //I store it in an array
      //two vowels 'e' and 'u' are separate from other vowels
      // because I want them to appear twice in the result array.
      //so, the outer loop goes through each letter and choses two vowels for the result array
    }
  //console.log(i); // I can uncomment it if I want to see the first loop works
  for (let j = 0; j < vowels.length; j++) {
    //the inner loop starts from 0 (j=0), goes throught the length of the vowels array
    //making counter bigger by 1 every iteration
    //console.log(j);// I can uncomment it to look how it works so far
    if (input[i] === vowels[j]) {
        // if letter in input array is a vowel from the vowel array
      resultArray.push(input[i]);    
      //I store in a resultArray
    }
  }
}
console.log(resultArray);
//log the result
let resultString = resultArray.join(' ').toUpperCase();
//convert letter to uppercase and concatenate the vowels separating them with an empty space
console.log(resultString);
//log the result: UUEEIEEAUUEE 
