function printPairs(arr, target){
    
    

    for(let i = 0; i<arr.length;i++){
     for(let j = i; j<arr.length; j++){
         for( let k = j+1; k <arr.length;k++){
            if(arr[i] + arr[j] + arr[k]== target)
            console.log("("+arr[i]+ "," +arr[j]+ "," +arr[k]+")");
         }
       
     }

    }

}
let arr = [3, 1, 2, 9, 7, 5, -1, 6];
let target= 9;
printPairs(arr,target);