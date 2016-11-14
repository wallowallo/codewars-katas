function diamond(n){
  if(n % 2 === 0 || Math.sign(n) === -1) {
    return null;
  }
  let array = []
  const diamonds = '******************************************************************************';
  do {
    array.push(diamonds.split('', n).join(''));
    let reverse = array.reverse();

    n -= 2;
  } while(n > 0);
  let merp = array.reverse().join('\n') + '\n' + array.reverse().splice(1,20).join('\n')
}
diamond(5);
