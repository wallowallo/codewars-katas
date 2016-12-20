function numberJoy(n) {
  // find out if the number is a harshad number, then find out if that number is multiplied by the number reversed
  //split the number into an array and add the numbers together to find out if the added number divides the input to an integer
  //if that integer is the added number reversed then let it equal to true else set it to false
  let addInput = (''+n).split('').map(a => parseInt(a)).reduce((a,b) => a+b);
  let harshadNumber = n / addInput;
  let reversed = ('' + harshadNumber).split('').reverse().join('');
  console.log(harshadNumber);
  if(addInput === parseInt(reversed, 10)) {
    return console.log(reversed, 'true');
  }
  return console.log('false');
}
numberJoy(1729);
//should be 1+7+2+9 = 19
//then 19 x 91 to multiply with the reversed number should equal to input
//this answer should return true
numberJoy(213);
