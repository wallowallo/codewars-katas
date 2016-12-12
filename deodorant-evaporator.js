function evaporator(content, evap_per_day, threshold){ 
  let days = 0;
  let renderedUseless = content / threshold;
 //create while loop to increase days and divide the content with the evap_per_day until it hits the threshold
  while(content > renderedUseless) {
    let subtract = content / evap_per_day;
    content -= subtract;
    days++;
    console.log(content);
  }
 console.log('content', content);
 console.log('days', days);
}
evaporator(10,10,10);
//should be 22
