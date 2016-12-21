function numberJoy(n) {
  let addInput = (''+n).split('').map(a => parseInt(a)).reduce((a,b) => a+b);
  let harshadNumber = n / addInput;
  let reversed = ('' + harshadNumber).split('').reverse().join('');
  if(addInput === parseInt(reversed, 10)) {
    return true;
  }
  return false;
}
numberJoy(1729);
//should be 1+7+2+9 = 19
//then 19 x 91 to multiply with the reversed number should equal to input
//this answer should return true
numberJoy(213);
numberJoy(1);
numberJoy(81);
numberJoy(1458);
