function rot13(str) {
    let result = ""
    let firstHalf = "ABCDEFGHIJKLM";
    let secondHalf = "NOPQRSTUVWXYZ";

    str.split("").forEach(function(decodingLetter, index){
        let alphabetStartIndex = firstHalf.indexOf(decodingLetter)
        let alphabetEndIndex = secondHalf.indexOf(decodingLetter)
        
      if(alphabetStartIndex >= 0){
        result += secondHalf[alphabetStartIndex];
      }
      else if(alphabetEndIndex >= 0){
        result += firstHalf[alphabetEndIndex];
      }else{
        result += decodingLetter
      }
    });
    return result
  }
  
  console.log(rot13("URYYB JBEYQ"));