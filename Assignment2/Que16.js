function subseq(oristr, substr) {
    if(oristr==="") {
        console.log(substr)
        return;
    }

    let ch= oristr[0];
    let modstr = oristr.substring(1);
    subseq(modstr, substr+ch);
    subseq(modstr, substr)




}
subseq("726", "")