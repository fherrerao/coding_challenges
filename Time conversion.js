function timeConversion(s) {
  // Write your code here
  const format = s[s.length-2];
  const intTime = parseInt(s.slice(0,2));
  
  if(format == 'P' && s.slice(0,2) == '12'){
      return s.slice(0, s.length-2);
  }
  else if(format == 'P'){
      return intTime+12+s.slice(2,s.length-2);
  }    
  else if(format == 'A' && s.slice(0,2) == '12'){
      return '00'+ s.slice(2,s.length-2);
  }
  else if(format == 'A'){        
      return s.slice(0,s.length-2);
  }    
  else {
      return s;
  }
}

module.exports = timeConversion;
