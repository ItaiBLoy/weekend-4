function toWeirdCase(str){
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++){
      (i % 2 === 0) ? arr[i] = arr[i].toUpperCase() : arr[i] = arr[i].toLowerCase();
    }
    return arr.toString().replace(/,/g, '')
  }