function recurSum(n)
{
    if (n <= 1)
        return n;
    return n + recurSum(n - 1);
}
 
let n = 5;
console.log(recurSum(n));