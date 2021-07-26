function arraySortedOrNot(arr, n)
    {
 
        // Array has one or no element
        if (n == 0 || n == 1)
            return true;
 
        for (let i = 1; i < n; i++)
 
            // Unsorted pair found
            if (arr[i - 1] > arr[i])
                return false;
 
        // No unsorted pair found
        return true;
    }
 
// Driver Code
 
        let arr = [ 20, 25, 23, 45, 78, 88 ];
        let n = arr.length;
 
        if (arraySortedOrNot(arr, n))
            console.log("sorted");
        else
            console.log("Not sorted");