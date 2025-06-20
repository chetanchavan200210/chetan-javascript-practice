// let n = 5 ;
// for (let i =1 ; i<=n ; i++ ){
//  for (let j= 1; j<=i;j++){
//     Process.stdout.write(i.toString());
// }
// console.log();
// }

// ****
//*** 
//** 
//*
// let l= 5 ;
// for(let i = l ; i>=1; i--){
//     for(let j = 1 ;j<=i; j++ ){
//         process.stdout.write(j.toString());

//     }
// console.log();
// }

// pattern *
//        * *

// let n = 4 ;
// let space = n-1 ;
// let star =1;
// for (let i = 1 ; i<=n;i++){
//     for (let j = 1 ; j<=space; j++){
//         process.stdout.write(" ");
    
//     }
// for (let k = 1; k<=star ; k++){
//     process.stdout.write("*");
// }
// space--;
// star+=2
// console.log();
// }



// new pattern

let n = 4 ;
let space = n-1;
let star = n*2-1;

for (let i = 1; i<=n;i++){
    for(let j = 1;j<=space;j++){
        process.stdout.write(" ");
    }
for (k = 1;k<=star;k++ ){
    process.stdout.write("*");
    
}
space++
star-=2;
console.log();
}

//     *
//    ***
//   *****
//  *******
//  *******
//   *****
//    ***
//     *

// print pattern ;

cons