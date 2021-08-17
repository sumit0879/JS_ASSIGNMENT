function checkBalanced(str, ind = 0, open = 0, closed= 0){
    if(ind === str.length -1){
        if(open === closed){
            return true;
        }
        else{
            return false;
        }
    }
    
    if(open >= closed){
        if((str[ind] =='{') || (str[ind] == '[') || (str[ind] == '(')){
           return checkBalanced(str, ind+1, open+1, closed);
        }
        if((str[ind] == '}') || (str[ind] == ']') || (str[ind] == ')')){
           return checkBalanced(str, ind+1, open, closed+1);
        }
        return checkBalanced(str, ind+1, open, closed);
    }
}
let str = '[a+{b+(c+d)+e+f]';
let res = checkBalanced(str);
console.log(res);