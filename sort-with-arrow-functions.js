var OrderPeople = function(people){
  return people.sort((a,b) => {
    if(a.age > b.age) {
      return 1;
    }
    else if(a.age < b.age) {
      return -1;
    }
    //when a is equal to b
    return 0;
  });
}

//other codewarriors best practice/clever
var OrderPeople = function(people){
  return people.sort((a,b) => a.age - b.age );
}
