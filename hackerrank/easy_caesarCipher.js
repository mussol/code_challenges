//https://www.hackerrank.com/challenges/caesar-cipher-1

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());
    var encrypted = "";
    for (let i = 0; i < n; i++) {
        encrypted += encrypt(s[i], k);
    }
    console.log(encrypted);
}

function encrypt(char, k) {
    let code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
        return String.fromCharCode((code - 65 + k) % 26 + 65);
    } if (code >= 97 && code <= 122) {
        return String.fromCharCode((code - 97 + k) % 26 + 97)
    } else {
        return char;
    }
}

/*
Alternatively, although much longer for only one word, creating a 'dictionary':

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());
    var encrypted = "";
    var dict = createDict(k);
    for (var i = 0; i < n; i++) {
        encrypted += dict[s[i]] ? dict[s[i]] : s[i];
    }
    console.log(encrypted);
}

function createDict(k) {
  var dict = {};
  for (let i = 65; i <= 90; i++) {
    let key = String.fromCharCode(i);
    let value = String.fromCharCode((i - 65 + k) % 26 + 65);
    dict[key] = value;
  }
  for (let i = 97; i <= 122; i++) {
    let key = String.fromCharCode(i);
    let value = String.fromCharCode((i - 97 + k) % 26 + 97);
    dict[key] = value;
  }
  return dict;
}
*/