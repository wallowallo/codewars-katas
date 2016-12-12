var OrderPeople = function(people){
  return people.sort((a,b) => {
    if(a.age > b.age) {
      return 1;
    }
    else if(a.age < b.age) {
      return -1;
    }
    return 0;
  });
}
