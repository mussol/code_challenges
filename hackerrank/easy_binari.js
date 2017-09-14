// https://www.hackerrank.com/challenges/30-binary-numbers

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
    let binStr = n.toString(2);
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < binStr.length; i++){
        if (binStr[i] === '1'){count++;}
        else {count = 0;}
        if (count > maxCount){maxCount = count;}
    }
    console.log(maxCount);
}