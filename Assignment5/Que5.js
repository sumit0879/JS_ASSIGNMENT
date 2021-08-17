function keypad(str, str2="") {
    if(str.length === 0){
        console.log(str2);
        return;
    }
    //single Digit
    let ele = Number(str[0]);
    let numToCh = String.fromCharCode(96+ele);
    keypad(str.substring(1), str2 + numToCh);
    //double Digit
    let ele2 = Number(str.substring(0,2));
    if(str.length >=2 && ele2 <=26){
        keypad(str.substring(2), str2 + String.fromCharCode(96+ele2))
    }
}
keypad("1123"); 