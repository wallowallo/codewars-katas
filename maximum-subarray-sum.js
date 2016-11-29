function maxSequence(arr) {
  let checkArray = [];
  let map = arr.map((a, b) => a < 0 ? checkArray.push(a) : 0)
  let maxCallback = (max, cur) => Math.max(max, cur);
  if(arr.length === 0 || arr.length == checkArray.length) { 
    return 0;
  }
  let newArray = [];
  arr.forEach((element,index) => newArray.push(arr.slice(index).reduce((a,b) => a+b)));
  return newArray.reduce(maxCallback);
  //return console.log(arr.map().reduce(maxCallback);
  //iterate over the array and slice it up into multiple sub arrays, add them together. Push them to an array then use math.max to decide the greatest sub array value.    
  //use Math.max(...Array)
}
maxSequence([1, 2, 3, 4, -5, 6, 7])
maxSequence([]);
maxSequence([-2, -1, -3]);

