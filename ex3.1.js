function nb_year(p0, percent, aug, p){
    let years = 0;
    let i = 0;
    if (p0*percent + aug <= 0){return 'Only at the Resurrection'}
    while (p0 < p){
        p0 += p0*percent + aug;
        years++;
        i++;
    }
    return years;
}