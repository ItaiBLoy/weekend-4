function binary(arr){
  let dec = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[arr.length-i-1] === 1){dec += 2**i}
  }
  return dec;
}