// function to convert decimal to octal
function decToOctal(n)
{
     
    // array to store octal number
    let octalNum = new Array(100);
 
    // counter for octal number array
    let i = 0;
    while (n != 0) {
 
        // storing remainder in octal array
        octalNum[i] = n % 8;
        n = Math.floor(n / 8);
        i++;
    }
 
    // printing octal number array in reverse order
    for (let j = i - 1; j >= 0; j--)
        console.log(octalNum[j]);
}
 
// Driver Code
    let n = 33;
     
    // Function Call
    decToOctal(n);