function reverseNum(num){
    
    let str = num.toString().split("").reverse().join("");

    num = parseInt(str);

    return str;
}
let num = 12345;


console.log("Reverse of No. is " + reverseNum(num));