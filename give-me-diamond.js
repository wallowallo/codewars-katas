// Task instructions :
// This kata is to practice simple string output. Jamie is a programmer, and girlfriend of James. She likes diamonds,
// and this time she expects String of diamond from James. As James doesn't know how to do it, he needs your help.
// Task:
//
// You need to a string that when printed, displays a diamond shape on the screen using asterisk ("*") characters.
// Please see provided test cases for exact output format.
//
// The shape that will be returned from print method resembles a diamond,
// where the number provided as input represents the number of *’s printed on the middle line.
// The line above and below will be centered and will have 2 less *’s than the middle line.
// This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.
//
// Return null if input is even number or negative
// (as it is not possible to print diamond with even number or negative number).
//
// Please see provided test case(s) for examples.
//
// JS Note
//
// JS students must implement the diamond(n) method, and return null for invalid input.

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
