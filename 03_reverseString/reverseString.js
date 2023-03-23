const reverseString = function (word) {
  let givenWord = word.split("");

  let result = "";
  for (let i = 0; i < word.length; i++) {
    result = givenWord.reverse().join("");
    return result;
  }
};

// Do not edit below this line
module.exports = reverseString;
