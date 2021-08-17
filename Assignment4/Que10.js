function twinCounter(str, ind = 0, twinCount = 0){
    //base condition 
    if(ind > str.length - 3) {
        console.log(str[ind], ind);
        console.log(twinCount);
        return twinCount;
    }
    console.log(str[ind], ind);
    if((str[ind] != str[ind + 1]) && (str[ind] == str[ind + 2])) {
        return twinCounter(str, ind+1, twinCount + 1);
    }
}

let str = "AXAXA";
let result = twinCounter(str);
console.log(result);