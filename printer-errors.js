// function printerError(s) {
//   let errors = 2;
//   return console.log(`${errors}/${s.length}`);
// }
// printerError("asdsdasd");

function printerError(s) {
  let nToZ = 'nopqrstuvwxyz';
  let errors = 0;
  let n = 0;
  for (let i = 0; i <= s.length; i++) {
    if( s.charAt(i) ===  nToZ.charAt(0) ) {
      errors += 1;
    }
    else if ( s.charAt(i) !==  nToZ.charAt(0) ) {
      n += 1;
      console.log('firing', n);
    }
  }
  return console.log(`${errors}/${s.length}`);
}
printerError("asdasdesdnnnnfsdfnopq");
