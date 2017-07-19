//https://www.freecodecamp.org/challenges/arguments-optional

function addTogether() {
  var args = [...arguments];
  for (let arg of args) {
    if (typeof(arg) === undefined || typeof(arg) !== "number") {
      return undefined;
    }
  }
  switch (args.length) {
    case 2: return args[0] + args[1];
    case 1: return function(num) {
      return typeof(num) !== "number" ? undefined : args[0] + num;
    };
  }
}