function rcheese(row, col, arr = [], str = ""){
    if(row == 0 && col == 0){
        arr.push(str);
        return;
    }
    if(col< 0 || row < 0){
        return;
    }
    rcheese(row - 1, col, arr, str + 'v');
    rcheese(row, col - 1, arr, str + 'h');
    rcheese(row -1, col -1, arr, str + 'd')
    return arr;
}
let res = rcheese(2,2);
console.log(res);