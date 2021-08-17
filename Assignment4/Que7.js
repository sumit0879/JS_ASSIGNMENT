function bubbleSort(arr, ind = 0){
    if(ind === arr.length -1){
        return;
    }
    if(arr[ind] > arr[ind + 1]) {
        [arr[ind], arr[ind+1]] = [arr[ind+1], arr[ind]];
        bubbleSort(arr, ind+1);
        ind = 0;
        bubbleSort(arr, ind);
    }
    bubbleSort(arr, ind + 1);
}
let arr = [5,2,4,8,7];
bubbleSort(arr);
console.log(arr);