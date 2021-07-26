function GCD(a,b){
    if(b==0){
        return a;
    }
    return GCD(b , a%b);
}

function LCM(a,b){
    return(a*b)/GCD(a,b);
}

let a= 5;
let b = 7;

console.log("LCM of " + a + " and "
+ b + " is " + LCM(a, b));