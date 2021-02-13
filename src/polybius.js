// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusGrid = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    let output = "";
    let spaceCounter = 0;
    if (encode) {
      input = input.toLowerCase();
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += " ";
        } else {
          for (row = 0; row < 5; row++) {
            for (col = 0; col < 5; col++) {
              const charCheck = polybiusGrid[row][col];
              if (charCheck.includes(input[i])) {
                output += `${col + 1}${row + 1}`;
                break;
              }
            }
          }
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") spaceCounter++;
      }
      const evenCheck = (input.length - spaceCounter) % 2;
      if (evenCheck === 1) return false;
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          output += " ";
          i--;
        } else {
            row = parseInt(input[i + 1]) - 1;
            col = parseInt(input[i]) - 1;
          output += `${polybiusGrid[row][col]}`;
        }
      }
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
