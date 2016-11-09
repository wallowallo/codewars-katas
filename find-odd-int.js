function findOdd(A) {
  let uniq = A.map((number) => {
    return {count: 1, number: number}
  })
  .reduce((a, b) => {
    a[b.number] = (a[b.number] || 0) + b.count
    return a
  }, {})
    return Math.round(Object.keys(uniq).filter((a) => uniq[a] % 2 === 1));
}

// code warrios best practice solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
