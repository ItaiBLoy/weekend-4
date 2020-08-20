function filter(words){
    let filtered = [];
    for (let i = 0; i < words.length; i++){
      if (words[i].length > 6){filtered.push(words[i])}
    }
    return filtered;
  }