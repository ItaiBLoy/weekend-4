function fibo(n, start){
    let fibo = [1, 1];
    for (let i = 2; i <= n; i++){
        fibo.push(fibo[i-1]+ fibo[i-2]);
    }
    if (start === 0){fibo.unshift(0)}
    return fibo.slice(0, n)
}
