function duplicate(str, ind = 0){
    if(ind == str.length-1){
        console.log(str);
        return str;
    }
    
    if(str[ind] == str[ind+1]){
        let newStr = str.slice(ind+1);
        let replaceStr = str.substring(0, ind+1) + '-';
        let modifiedStr = replaceStr + newStr;
        return duplicate(modifiedStr, ind+1);
    }
    return duplicate(str, ind+1);
}

let str = 'hellllo';
let res = duplicate(str);
console.log(res);