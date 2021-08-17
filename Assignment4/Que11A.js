function subseq(str, arr, str1="", ind = 0){
    if(ind == str.length){
        arr.push(str1);
        return;
    }
    let ch = str[ind];
    let uniCh = (ch.charCodeAt(0)).toString();
    subseq(str, arr, str1, ind+1);
    subseq(str, arr, str1+ch, ind+1);
    subseq(str, arr, str1+uniCh, ind+1);
    return arr.length;
}
let arr=[];
let str = 'ab';
res = subseq(str, arr);
console.log(res);
console.log(arr);