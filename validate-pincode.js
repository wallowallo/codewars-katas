function validatePIN (pin) {
  let array = pin.split('');
  array.map((e, i) => isNaN(e) ? array.splice(i, 1) : e);
  console.log(array);
  if(array.length === 4 || array.length === 6) {
    return console.log('true', pin);
  }
  return console.log('false',pin);
}
validatePIN('1234');
validatePIN('123aa');
validatePIN('ab2345');
validatePIN('123456')
