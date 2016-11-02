function spinWords(s){
  let words = s.split(' ');
  let array = [];
  if (words.length === 1 && words[0].length >= 5) {
     return console.log(s.split('').reverse('').join(''));
  }
  for(let i = 0; i < words.length; i++) {
    array.push(words[i]);
    if(words[i].length >= 5) {
      let reversed = words[i].split('').reverse('').join('');
      array.splice(i, 1, reversed);
    }
  }
  return console.log(array.join(' '));
}
spinWords("hello there mate");
spinWords("helloa");
spinWords("hey fancy to meet you here");
