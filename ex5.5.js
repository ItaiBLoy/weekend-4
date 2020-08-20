function abbreviate(name){
    let arr = name.split(' ');
    let abbre = arr[0][0].toUpperCase().concat('.').concat(arr[1][0].toUpperCase());
    return abbre;
  }