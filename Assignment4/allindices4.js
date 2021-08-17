function occur(arr, target, ind = 0, a = 0, arr2 = []) {
    if(ind == arr.length - 1 && a < 0){
        arr2.push(a);
        return arr2;
    }
    else if(ind == arr.length){
        return arr2;
    }
    let element = arr[ind];
    if(element == target){
        a = ind;
        arr2.push(a);
        return occur(arr, target, ind+1, a, arr2);
    }
    return occur(arr, target, ind+1, a, arr2);
}

let arr = [0, 4, 2, 2, 1, 2, 3, 4, 2];
let result = occur(arr, 2);
console.log(result);