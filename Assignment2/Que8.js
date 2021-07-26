function count5(arr,count){
    

    for (let i=0; i<arr.length; i++){
        if(arr[i]%5==0){
            count++;
        }
    }
      return count;
}

