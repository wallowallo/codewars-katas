function maxSequence(arr) {
  let newArray = [];
  let map = arr.map((a, b) => a < 0 ? newArray.push(a) : 0)
  if(arr.length === 0 || arr.length == newArray.length) { 
    return 0;
  }
  newArray = [];
  arr.forEach((element,index) => {
    newArray.push(arr.slice(index)
    .reduce((a,b) => a+b));
  });
  return console.log(newArray.reduce((max, cur) => Math.max(max,cur)));
  // find a way to iterate and slice unique subarrays to cover all possibilities in an array
}
maxSequence([1, 2, 3, 4, -5, 6, 7])
maxSequence([]);
maxSequence([-2, -1, -3]);
maxSequence([9, 10, 3, 4, -5, 6, 7])
