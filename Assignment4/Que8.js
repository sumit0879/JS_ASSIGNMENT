function selectionSort(arr, ind = 0){
    if(ind == arr.length){
        return;
    }
    let maxInd = maxi(arr, ind);
    [arr[ind], arr[maxInd]] = [arr[maxInd], arr[ind]];
    selectionSort(arr, ind+1);
}

function maxi(arr, i){
    if(i == arr.length){
        return i-1;
    }
    if(arr[i] < arr[maxi(arr, i+1)]){
        return i; 
    }
    else{
        return maxi(arr, i+1);
    }
}
let arr = [5,4,3,2,1];
console.log(arr);
selectionSort(arr);
console.log(arr);



