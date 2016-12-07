function findMissingNumber(seq){
  //use split() to create an array where you can go over with map() on the array to match it with the index
  // if the index is not equal to the array then return that value or replace the value with the index
  let array = seq.split(' ').map((e, i) => parseInt(e) !== i+1 ? i+1: 0).filter(value => value > 0);
  if(seq === '' || array.length === 0) {
    return 0;
  }
  console.log(array[0]);
  return array[0];
}
findMissingNumber('1 7 3 4 5');
//should return 2
findMissingNumber('2 1 3 4');
//should return 1
