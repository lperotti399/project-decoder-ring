// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) {return false}
    //create an alphabetArray
    let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    //create an inputAlphabetArray
    let inputAlphabetArray = Array.from(alphabet.toLowerCase())
    const set1 = new Set(inputAlphabetArray)
    if(set1.size != 26) {return false}
   
   /*
    for(let i=0; i < inputAlphabetArray.length; i++) {
      const duplicate = 0 
      for(let j=0; j < alphabetArray.length; j++) {
        if(inputAlphabetArray[i] === alphabetArray[j] ) {
          duplicate += 1
        }
      }
    }
    */

    //create an indexArray
    let newLetterIndex = 0
    const outputArray =[]

    //convert the input string into a lowercase inputArray
    let inputArray = Array.from(input.toLowerCase())
    for (let i =0; i < inputArray.length; i++ ) {
      if(inputArray[i] === ' ') {outputArray.push(' ')}
      //else if(inputArray[i] === '.') {outputArray.push('.')}
      else if(encode) {
      newLetterIndex = alphabetArray.indexOf(inputArray[i])
      outputArray.push(inputAlphabetArray[newLetterIndex])
      }
      else if(!encode) {
        newLetterIndex = inputAlphabetArray.indexOf(inputArray[i])
        outputArray.push(alphabetArray[newLetterIndex])
        }
    }

    let output = outputArray.join("")

    return output;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
