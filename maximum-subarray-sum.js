function maxSequence(arr) {
  if(arr.length === 0) {
    return 0; //should return null if array is empty or only negative variables
  }
  return console.log(arr.reduce((a, b) =>  a+b, 0));
  //needs other logic to add them together.
}
maxSequence([1, 2, 3, 4, -5, 6, 7])
maxSequence([]);
maxSequence([-2]);

