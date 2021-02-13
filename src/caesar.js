// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    let output = "";

    if (!shift || shift < -25 || shift > 25) return false;

    if (!encode) shift *= -1;
    for (let i = 0; i < input.length; i++) {
      let letterCode = input.charCodeAt(i) + shift;
      if (letterCode > 122) letterCode -= 26; //wrapping the alphabet
      if (letterCode < 97) letterCode += 26; //wrapping the alphabet
      if (input[i] === " " || letterCode < 97 || letterCode > 122) {
        output += input[i];
      } else {
        output += String.fromCharCode(letterCode);
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
