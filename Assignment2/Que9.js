let array = [2,3,4,8,11];
function countPrime(arr) {
    let primeCount = 0;
    let j;
    for (let i = 0; i < arr.length; i++) {
        for (j = 2; j*j < arr[i] ; j++) {
            if(arr[i] % j == 0) {
                break;
            }
        }
        if(j*j > arr[i]){
            primeCount++;
        }
    }
    return primeCount;
}
console.log(countPrime(array));