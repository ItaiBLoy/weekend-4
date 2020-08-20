function mask(str){
    let mask = '';
    for (let i = 0; i < str.length-5; i++){mask = mask.concat("#")}
    mask = mask.concat(str.substr(str.length-4));
    return mask
  }