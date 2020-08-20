function tribo(n, start){
    let tribo = [1, 1, 1];
    for (let i = 3; i <= n; i++){
        tribo.push(tribo[i-1]+ tribo[i-2] + tribo[i-3]);
    }
    if (start === 0){tribo.unshift(0)}
    return tribo.slice(0, n)
}