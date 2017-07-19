//https://www.freecodecamp.org/challenges/binary-agents

function binaryAgent(str) {
  var translation = '';
  str.split(" ").forEach(function(char) {
    var charCode = 0, j = 0;
    for (let i = char.length-1; i >= 0; i--) {
      if (char[i] == 1) {
        charCode += Math.pow(2, j);
      }
      j++;
    }
    translation += String.fromCharCode(charCode);
  });
  return translation;
}