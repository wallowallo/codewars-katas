function maxSequence(arr) {
  let checkArray = [];
  let map = arr.map((a, b) => a < 0 ? checkArray.push(a) : 0)
  let maxCallback = (max, cur) => Math.max(max, cur);
  if(arr.length === 0 || arr.length == checkArray.length) { 
    return console.log('zero', 0);
  }
  return console.log(arr.map().reduce(maxCallback);
  //return console.log(arr.reduce((a, b) =>  a+b, 0));
  //use Math.max(...Array)
  //needs other logic to add them together.
}
maxSequence([1, 2, 3, 4, -5, 6, 7])
maxSequence([]);
maxSequence([-2, -1, -3]);

