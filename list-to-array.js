function listToArray(list) {
  //find out how to look into objects within objects
  //target the value that is relevant and push it into an array/ use slice to make a new array with those values
  let array = [];
  array.push(list.value);
  if(list.next !== null) {
    array.push(list.next.value);
    array.push(list.next.next.value);
  }
  return array;
}
