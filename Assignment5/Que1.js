function movex(arr,i) {

    if (i >= arr.length)
        return;

    let curr = arr[i];

    if(curr!= 'x')      
    console.log(curr);

    movex(arr,i+1,arr.length)

    if (curr == 'x')
        console.log(curr);


}

let arr = 'abexexdexed';
movex(arr,0,arr.length) 