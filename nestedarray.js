let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for(let i = 0 ;i<arr.length ; i++ ){
    for(let j = 0 ; j < arr[i].length;j++ ){
        console.log (arr[i][j])
    }
}
for(let i = 0 ;i<arr.length ; i++ ){
    for(let j = 0 ; j < arr[i].length;j++ ){
        process.stdout.write(arr[i][j].toString())
    }
}
console.log(arr[0][0]);
console.log(arr[1][2]);
arr[1][2] = 100;
console.log(arr);

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);