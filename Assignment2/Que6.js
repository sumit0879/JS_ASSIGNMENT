function GCD(a,b){
    if(b==0){
        return a;
    }
    return GCD(b , a%b);
}

//drive the code 
let a = 10;
let b = 15;

console.log(`GCD of ${a} and ${b} is ${GCD(a, b)}`);