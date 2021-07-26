function permu(oristng, permstng) {
    if(oristng===""){
        console.log(permstng);
        return;
    }
    let ch = oristng[0];
    let modstng = oristng.substring(1);
    for(let i=0; i<=permstng.length; i++) {
        let leftpar=permstng.substring(0,i);
        let rightpar=permstng.substring(i ,permstng.length);
        let newperm= leftpar+ch+rightpar;
         permu(modstng,newperm)
    }
}
permu("726" , "")