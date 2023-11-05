function rot13(str) {
    let result = ""
    let firstHalf = "ABCDEFGHIJKLM";
    let secondHalf = "NOPQRSTUVWXYZ";
    for(let i = 0; i < str.length; i++){
      let decodingLetter = str[i];
      if(firstHalf.indexOf(decodingLetter) >= 0){
        result += secondHalf[firstHalf.indexOf(decodingLetter)];
      }
      else if(secondHalf.indexOf(decodingLetter) >= 0){
        result += firstHalf[secondHalf.indexOf(decodingLetter)];
      }else{
        result += decodingLetter
      }
    }
    return result
  }
  
  console.log(rot13("URYYB JBEYQ"));