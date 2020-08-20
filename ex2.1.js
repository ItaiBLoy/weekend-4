function sumOfLowest(arr){
    let min1 = arr[0];
    let min2 = arr[1];
    for (let i = 2; i < arr.length; i++){
        if (arr[i] < min1){min1 = arr[i];}
        else if (arr[i] < min2){min2 = arr[i]}
    }
    return min1+min2
}