//my answer
function twoDecimalPlaces(n) {
  return Math.round(n * 100)/100;
}

// another way to do it from other code warriors
const twoDecimalPlaces = n =>  Number(n.toFixed(2))
