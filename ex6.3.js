function organizeString(s1, s2){
    let arr = s1.split('').concat(s2.split(''));
    arr = arr.sort();
    let str = arr[0];
    for (let i = 1; i < arr.length; i++){
      if (arr[i] !== arr[i-1]){str = str.concat(arr[i])}
    }
    return str;
  }