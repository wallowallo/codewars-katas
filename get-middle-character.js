// my first try
function getMiddle(s) {
  if ( s.length <= 1) {
    // if string is only one character return first index
    return s.charAt(0);
  }
  else if ( s.length % 2 === 0) {
    // find the two middle characters
    let i = Math.floor(s.length / 2);
    console.log(i);
    return s.charAt(i - 1) + s.charAt(i);
  }
  else if (s.length % 2 === 1) {
    //find the middle character
    let i = Math.floor(s.length / 2);
    console.log(i);
    return s.charAt(i);
  }
}

// my refactor
function getMiddle(s) {
  let i = Math.floor(s.length / 2);
  if ( s.length <= 1) {
    return s.charAt(0);
  }
 return s.length % 2 === 0 ? s.charAt(i - 1) + s.charAt(i) : s.charAt(i);
}

// bestpractice codewarriors refactor
// s.substr starts at Math.ceil  s.length / 2 - 1 (the -1 is because string has the value of 0) and then substr will continue for 2 or 1
// characters depending if the s.length is % 2 === 0, if true it will continue for 2 characters if false it will only do 1.
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
