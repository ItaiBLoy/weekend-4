function isogram(str){
    let arr = str.toLowerCase().split('');
    arr = arr.sort();
    let iso = true;
    for (let i = 1; i < arr.length; i++){
      if (arr[i] === arr[i-1]){iso = false; break}
    }
    return iso;
  }