// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

      function polybius(input, encode = true) {
    // your solution code here

    //create an array of objects with pair keys that have a key and letter
    //the id should be the top number followed by the botton number
let encodePolySquare = [
                    {id: 11, letter:"a"},
                    {id: 21, letter:"b"},
                    {id: 31, letter:"c"},
                    {id: 41, letter:"d"},
                    {id: 51, letter:"e"},
                    {id: 12, letter:"f"},
                    {id: 22, letter:"g"},
                    {id: 32, letter:"h"},
                    {id: 42, letter:"i"},
                    {id: 42, letter:"j"},
                    {id: 52, letter:"k"},
                    {id: 13, letter:"l"},
                    {id: 23, letter:"m"},
                    {id: 33, letter:"n"},
                    {id: 43, letter:"o"},
                    {id: 53, letter:"p"},
                    {id: 14, letter:"q"},
                    {id: 24, letter:"r"},
                    {id: 34, letter:"s"},
                    {id: 44, letter:"t"},
                    {id: 54, letter:"u"},
                    {id: 15, letter:"v"},
                    {id: 25, letter:"w"},
                    {id: 35, letter:"x"},
                    {id: 45, letter:"y"},
                    {id: 55, letter:"z"}]
let decodePolySquare = [
                      {id: 11, letter:"a"},
                      {id: 21, letter:"b"},
                      {id: 31, letter:"c"},
                      {id: 41, letter:"d"},
                      {id: 51, letter:"e"},
                      {id: 12, letter:"f"},
                      {id: 22, letter:"g"},
                      {id: 32, letter:"h"},
                      {id: 42, letter:"(i/j)"},
                      {id: 52, letter:"k"},
                      {id: 13, letter:"l"},
                      {id: 23, letter:"m"},
                      {id: 33, letter:"n"},
                      {id: 43, letter:"o"},
                      {id: 53, letter:"p"},
                      {id: 14, letter:"q"},
                      {id: 24, letter:"r"},
                      {id: 34, letter:"s"},
                      {id: 44, letter:"t"},
                      {id: 54, letter:"u"},
                      {id: 15, letter:"v"},
                      {id: 25, letter:"w"},
                      {id: 35, letter:"x"},
                      {id: 45, letter:"y"},
                      {id: 55, letter:"z"}]
    //create an array of objects in reverse order of encodePolySquare
    //create a decodeInputArray
    //convert the input string into an array
        const encodeInputArray =  Array.from(input.toLowerCase())
        const outputArray = []
        let decodeInputArray = []
        let trimmedInput = input.replace(" ","")
        
       // if(trimmedInput.length % 2 != 0) {return false;}

        //add logic so if input.substring(i, i + 2) === ' '
        //then push space and continue the loop at the next iteration
        for (var i = 0;  i < input.length; i += 2) {
          if(input[i] === ' '){
            decodeInputArray.push(' ');
            i = i -1;
            continue;
          }
          decodeInputArray.push(input.substring(i, i + 2));
      }

    //encode logic
      if(encode) {
      for(let i=0; i<encodeInputArray.length; i++) {
        if(encodeInputArray[i] === ' ') {outputArray.push(' ')}
        else if(encodeInputArray[i] === '.') {outputArray.push('.')}
        else {
        for(let j=0; j<encodePolySquare.length; j++) {
            if(encodeInputArray[i] === encodePolySquare[j].letter) {
              outputArray.push(encodePolySquare[j].id)
            }
        }
      }
      }
    }
    //decode logic
    else if(!encode) {
      if(trimmedInput.length % 2 != 0) {return false;}
      for(let i=0; i<decodeInputArray.length; i++) {
        if(decodeInputArray[i] === ' ') {outputArray.push(' ')}
        else if(decodeInputArray[i] === '.') {outputArray.push('.')}
        else {
        for(let j=0; j<decodePolySquare.length; j++) {
            if(decodeInputArray[i] == decodePolySquare[j].id) {
              outputArray.push(decodePolySquare[j].letter)
            }
        }
      }
      }
    }
   //return decodeInputArray
    let output = outputArray.join("")
    return output
    
    
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
