function lexNum(n)
{
    let s = [];

    for (let i = 1; i <= n; i++)
    {
        s.push(i.toString());
    }

    s.sort();
    let ans = [];
    for (let i = 0; i < n; i++)
        ans.push(parseInt(s[i]));

    for (let i = 0; i < n; i++)
        console.log(ans[i] + " ");
}


let n = 15;
lexNum(n);