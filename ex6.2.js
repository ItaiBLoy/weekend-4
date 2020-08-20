function countingDuplicates(str){
    str = str.toLowerCase();
    let letters = '';
    let count = 0;
    let alreadyCounted = '';
    for (let i = 0; i < str.length; i++){
      if (letters.includes(str[i]) && !(alreadyCounted.includes(str[i]))){
        count++;
        alreadyCounted = alreadyCounted.concat(str[i]);
      }
      else {
        letters = letters.concat(str[i]);
      }
    }
    return count;
  }