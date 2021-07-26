function program(n1, n2, ch){
    if(ch === '*'){
        return n1*n2;
    }
    else if(ch === '/'){
        return n1/n2;
    }
    else if(ch === '%'){
        return n1%n2;
    }
    else if(ch === '+'){
        return n1+n2;
    }
    else {
        return n1-n2;
    }
}
console.log(program(5, 7, '+'));