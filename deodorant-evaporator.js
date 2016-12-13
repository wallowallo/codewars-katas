function evaporator(content, evap_per_day, threshold){ 
  let days = 0;
  let renderedUseless =  threshold/100 * content;
 //create while loop to increase days and divide the content with the evap_per_day until it hits the threshold
  while(content > renderedUseless) {
    let subtract = evap_per_day/100 * content;
    content -= subtract;
    days++;
  }
 console.log('content', content);
 console.log('days', days);
}
evaporator(10,10,10);
//should be 22
evaporator(10,10,5);
//should be 29
