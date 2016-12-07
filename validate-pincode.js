function validatePIN (pin) {
  let array = pin.split('');
  array.map((e, i) => isNaN(e) ? array.splice(e) : e);
  if(array.length === 4 || array.length === 6) {
    return true;
  }
  return false;
}
validatePIN('-1234');
validatePIN('123aa');
validatePIN('ab2345');
validatePIN('123456')
