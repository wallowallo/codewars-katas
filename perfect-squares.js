function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let n = Math.sqrt(sq);
  for(let i = 0; i <= n; i++) {
    if ( i === n ) {
      //Math.pow takes n and multiplies it with itself, can be used to do sqrt as well
      // by replacing 2 with 0.5
      n = Math.pow(n + 1, 2);
      console.log(n);
      return n;
    }
   }
  return -1;
}
findNextSquare(121);


// Bestpractice refactor from other codewarriors
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
