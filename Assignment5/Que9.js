function printAllSubsetsRec(arr, n, v, sum) {
    /* If remaining sum is 0, then print all
     elements of current subset.*/
    if (sum == 0) {
        for (let x of v)
            console.log(x + " ");
            console.log("\n");
        return;
    }

    // If no remaining elements,
    if (n == 0)
        return;

    /* We consider two cases for every element.
     a) We do not include last element.
     b) We include last element in current subset.*/
    printAllSubsetsRec(arr, n - 1, v, sum); 
    v.push(arr[n - 1]);
    printAllSubsetsRec(arr, n - 1, v, sum - arr[n - 1]);
    v.pop();
}

// Wrapper over printAllSubsetsRec()
function printAllSubsets(arr, n, sum) {
    let v = [];
    printAllSubsetsRec(arr, n, v, sum);
}

let arr = [2, 5, 8, 4, 6, 11];
let sum = 13;
let n = arr.length;
printAllSubsets(arr, n, sum);

