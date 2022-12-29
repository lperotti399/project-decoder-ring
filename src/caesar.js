// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const inputArray =  Array.from(input.toLowerCase())
    let newLetterIndex = 0
    const outputArray =[]
    
    if(!shift || shift ===0 || shift <(-25) || shift > 25 ) {
      return false}
    else {
    
    
    for (let i =0; i < inputArray.length; i++ ) {
      if(inputArray[i] === ' ') {outputArray.push(' ')}
      else if(inputArray[i] === '.') {outputArray.push('.')}
      else if(!encode) {
        newLetterIndex = alphabet.indexOf(inputArray[i])-shift
        if(newLetterIndex > 25) {newLetterIndex = newLetterIndex - Number(alphabet.length)}
        else if(newLetterIndex <0) {newLetterIndex = newLetterIndex + Number(alphabet.length)}
        outputArray.push(alphabet[newLetterIndex])
      }
      else {
        newLetterIndex = alphabet.indexOf(inputArray[i])+shift
        if(newLetterIndex > 25) {newLetterIndex = newLetterIndex - Number(alphabet.length)}
        else if(newLetterIndex <0) {newLetterIndex = newLetterIndex + Number(alphabet.length)}
        outputArray.push(alphabet[newLetterIndex])
      }
    }

    //return the output array
    let output = outputArray.join("")
    return output;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
