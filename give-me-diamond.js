function diamond(n){
  if(n % 2 === 0 || Math.sign(n) === -1) {
    return null;
  }
  let array = []
  const diamonds = '******************************************************************************';
  do {
    array.push(diamonds.split('', n).join(''));
    n -= 2;
  } while(n > 0);
  return console.log(array.reverse().join('\n') + '\n' + array.reverse().splice(1,20).join('\n'));
}
diamond(5);
