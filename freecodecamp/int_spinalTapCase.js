//https://www.freecodecamp.com/challenges/spinal-tap-case

function spinalCase(str) {
  return str.replace(/\B([A-Z])/g, ' $1').replace(/[\s_]+/g, '-').toLowerCase();
}