function reverseArr(arr, i, j){
    if(i < j){
      let temp1 = arr[i];
      arr[i] = arr[j];
      arr[j] = temp1;
      i++;
      j--;
      return reverseArr(arr,i,j);
    } else if(i === j ){
      return arr;
    }
  }
  let Arr = [1,5,7,3,2,9,11];
  result = reverseArr(Arr, 0, Arr.length-1);
  console.log(result);
