// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const mainAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    if (!alphabet) return false;
    const alphaSplit = alphabet.split("");
    if (!(alphabet.length === 26) ||
    (alphaSplit.some((chkRpt, i) => alphabet.lastIndexOf(chkRpt)!=i))) return false;

    const output = function() {
      let str1 = "";
      let str2 = "";
      let funcOutput = "";
      if (encode) {
        str1 = mainAlphabet;
        str2 = alphabet;
      } else {
        str1 = alphabet;
        str2 = mainAlphabet;
      }

      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          funcOutput += " ";
        } else {
          const letterIndex = str1.indexOf(input[i]);
          funcOutput += str2[letterIndex];
        }
      }
      return funcOutput;

    }

    return output();
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
