function stray(n) {
  let newArray = [];
  n.map((e, i) => (e !== n[i+1] && e !== n[i-1]) ? newArray.push(e):0);
  return newArray[0];
}
stray([17,17,17,17,3]);

//other codewarriors best practice:
const stray = nums => nums.reduce((a, b) => a ^ b);
