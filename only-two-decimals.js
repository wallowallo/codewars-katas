// this was my first attempt on the round up kata, that i misunderstood. Thought it was to reduce to 2 decimals.
// this function converts every number with decimals over 2. for example "12.11434223" to 12.11.
// this function does not round up.
function twoDecimalPlaces(n) {
  let numberString = n.toString();
  let atDot;
  console.log('original number', numberString);
  for (var i = 1; i <= numberString.length; i++) {
    if(numberString.charAt(i) === '.') {
      atDot = numberString.charAt(i);
      let index = numberString.indexOf(atDot);
      let removeDecimals = index + 3 - numberString.length;
      if (removeDecimals === 0) {
        return n;
      }
      return console.log(parseInt(numberString) + parseFloat(numberString.slice(index, removeDecimals)));
    }
  }
}
twoDecimalPlaces(12353434.45678);
twoDecimalPlaces(12335.34);
twoDecimalPlaces(123.59678678);
twoDecimalPlaces(13.796);
twoDecimalPlaces(1.784234);
