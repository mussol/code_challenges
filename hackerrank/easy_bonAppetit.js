// https://www.hackerrank.com/challenges/bon-appetit

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

function bonAppetit(n, k, b, ar) {
    // Complete this function
    var totalBill = ar.reduce(function(prev, price) {
        return prev + price;
    }, 0);
    var partAnna = (totalBill - ar[k]) / 2;
    if (b == partAnna) {
        return 'Bon Appetit';
    }
    return b - partAnna;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var b = parseInt(readLine());
    var result = bonAppetit(n, k, b, ar);
    process.stdout.write("" + result + "\n");

}
