function solution(){
    const arr = [1,5,7,2,10];

    arr.sort(function(a,b){
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
    console.log(arr);
}
