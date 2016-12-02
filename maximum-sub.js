//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let subArrays = [];

//grabbing all subarrays from index 0 to end
//array.forEach((element, index) => subArrays.push(array.slice(index)));
function grabSubArrays(start, end) {
  return function(element, index) {
    return subArrays.push(array.slice(index, end));
  }
} 
array.forEach(function(element, index) {
  array.forEach(grabSubArrays(index, array.length - index));
});



let filteredSubArrays = subArrays.filter(val => val.length > 0);

let result = filteredSubArrays.reduce((oldValue, newValue) => { 
  let currentValue = newValue.reduce((a,b) => a+b);
  return currentValue > oldValue ? currentValue : oldValue;
});
//console.log(result);
//let sum = array.reduce((oldValue, newValue) =>  oldValue + newValue );
//console.log(sum);
