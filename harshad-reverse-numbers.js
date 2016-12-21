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

//best practice/clever from other codewarriors
function numberJoy(n) {
  var s = n.toString().split('').reduce((s,v) => s + +v, 0);
  var sr = +s.toString().split('').reverse().join('');
  return s * sr == n;
}
