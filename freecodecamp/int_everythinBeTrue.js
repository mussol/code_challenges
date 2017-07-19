//https://www.freecodecamp.org/challenges/everything-be-true

function truthCheck(collection, pre) {
  for (let obj of collection) {
    if (!obj[pre]) {return false;}
  }
  return true;
}