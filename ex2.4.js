function uniqe(arr){
    for (let i = 1; i < arr.length-1; i++){
      if (arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
        return arr[i];
      }
    }
    if (arr[0] !== arr[1]){return arr[0]}else{return arr[arr.length -1]}
  }