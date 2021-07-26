
function reverseArr(arr,i,j){
  
      while(i<=j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
        
        i++;
        j--;
      }
    }
  


let arr= [1,2,3,4,5];
reverseArr(arr,i=0,j=arr.length-1);
console.log(arr);
  
  


    



        