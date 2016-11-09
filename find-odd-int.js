function findOdd(A) {
  let uniq = A.map((number) => {
    return {count: 1, number: number}
  })
  .reduce((a, b) => {
    a[b.number] = (a[b.number] || 0) + b.count
    return a
  }, {})
  if(A.length === 1) {
    return console.log('one object' ,A[0]);
  }
  else if (Object.keys(uniq).filter((a) => uniq[a] % 2 === 1)) {
    return console.log(Math.round(Object.keys(uniq).filter((a) => uniq[a] % 2 === 1)));
  }
}
findOdd([1,1,3,3,4,4,5,5,2,2,5]);
findOdd([1,1,2,2,3,3,8,4,4,5,5,6,6,7,7,8,8]);
findOdd([1]);
findOdd([1,1,1,1,1,1,1,1,10]);

// code warrios best practice solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
console.log('xs', xs);
