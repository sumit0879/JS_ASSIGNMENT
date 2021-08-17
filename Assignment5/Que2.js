function rat(row, col, arr = [], str = ""){
    if(row == 0 && col == 0){
        arr.push(str);
        return;
    }
    if(col< 0 || row < 0){
        return;
    }
    rat(row - 1, col, arr, str + 'v');
    rat(row, col - 1, arr, str + 'h');
    return arr;
}
let res = rat(3,3);
console.log(res); 