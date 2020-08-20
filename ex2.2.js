function binary(arr){
    let dec = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[arr.length-i-1] === 1){dec += i*2}
    }
    return dec;
  }