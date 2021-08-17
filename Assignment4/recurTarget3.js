function recurTarget3(arr, l, r, target)
{
    if (r < l)
        return -1;
    if (arr[l] == target)
        return l;
    if (arr[r] == target)
        return r;
     return recurTarget3(arr, l+1, r-1, target);
}
   
    // Driver Code
    let arr = [3, 2, 1, 8, 6, 1, 3];
    let i;
    let n = arr.length;
    let target = 1;
    let index = recurTarget3(arr, 0, n - 1, target);
 
    if (index != -1){
      console.log(index);
    }
    