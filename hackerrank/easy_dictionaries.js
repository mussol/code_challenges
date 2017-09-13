// https://www.hackerrank.com/challenges/30-dictionaries-and-maps

function processData(input) {
    _input_array = _input.split('\n');
    var currentLine = 0;
    function readLine(){
        return _input_array[currentLine++];
    }
    var phoneBook = {};
    let n = parseInt(readLine());
    for (let i = 0; i < n; i++){
        var newEntry = readLine().split(' ');
        phoneBook[newEntry[0]] = newEntry[1];
    }
    let name = readLine();
    while (name){
        console.log(phoneBook.hasOwnProperty(name) ? name + '=' + phoneBook[name] : 'Not found');
        name = readLine();
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
