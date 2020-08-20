function camelCase(str){
    if (str.includes('-')){
        let arr = str.split('-');
        for (let i = 1; i < arr.length; i++){
            arr[i] = arr[i][0].toUpperCase()+arr[i].substr(1);
            arr = arr.toString();
        }
    }
    else if (str.includes('_')){
        let arr = str.split('_');
        for (let i = 1; i < arr.length; i++){
            arr[i] = arr[i][0].toLowerCase()+arr[i].substr(1);
            arr = arr.toString();
        }
    }
}