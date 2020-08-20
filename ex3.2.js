function bus(arr){
    let people = 0;
    for (let i = 0; i < arr.length; i++){
        people += arr[i][0] - arr[i][1];
        if (people < 0){people = 0;}
    }
    return people;
}