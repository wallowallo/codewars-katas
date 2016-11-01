console.log('hello');
function mango(quantity, price){
  let counter = 0;
  for (let i = 3; i <= quantity; i += 3) {
    counter += 1;
    console.log('counter', counter);
    console.log(i);
  }
  let result = price * (quantity - counter);
  console.log('result', result);
  return result;
}
mango(9,3);
mango(7, 3);
mango(2, 3);

// codewarriors bestpractice answer
function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}
