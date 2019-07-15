// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  var str = string.toLowerCase();
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var arr = letters.split("");
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (str[i] === arr[k]) {
        arr.splice(k, 1);
      }
    }
  }
  return arr.length === 0 ? true : false;
}
