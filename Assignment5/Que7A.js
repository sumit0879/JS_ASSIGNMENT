function permutation(str, count = [], i = 0, str2 = ''){
    if(i == str.length){
        count.push(str2);
        return;
    }
    for (let index = 0; index <= str2.length; index++) {
        let leftPart = str2.substring(0, index);
        let rightPart = str2.substring(index, str2.length);
        permutation(str, count, i+1, leftPart+str[i]+rightPart);
    }
    return count.length;
}
let res = permutation('abc');
console.log(res);