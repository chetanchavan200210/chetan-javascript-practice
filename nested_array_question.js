let data = [
    [1,2],
    [20,40],
    [60,80]
];
console.log(data[1][1]);

//change a value 

let marks =[
    [70,80],
    [90,5,100,20]
];
marks[0][1]= 50;
console.log(marks[0][1])
let count = 0 ;
for(let i = 0 ; i<marks.length; i++){
    for(let j = 0 ; j<marks[i].length ; j++){
        count++;
    }
    }
    console.log(count);

let sum = 0 ;
    for(let i = 0 ; i<marks.length; i++){
        sum = sum + marks[i].length;
    }
    console.log(sum)
    
    //sum of all element 

    let sumadd = 0 ; 
    for(let i = 0 ; i<marks.length; i++){
    for(let j = 0 ; j<marks[i].length ; j++){
    sumadd = sumadd + marks[i][j];
    }
    }
    console.log(sumadd);

    // flattening an array 
let flat = [];
    for(let i = 0 ; i<marks.length; i++){
    for(let j = 0 ; j<marks[i].length ; j++){
    flat.push(marks[i][j]);
    }
    }
console.log(flat)


// get first element of each inner array 

let arrt = [];

for(let i = 0 ; i<marks.length; i++){
    
    arrt.push(marks[i][0]) 
    }
    
    console.log(arrt);



    // replace all even no with 0 

    for(let i = 0 ; i<marks.length; i++){
    for(let j = 0 ; j<marks[i].length ; j++){
    if(marks[i][j] % 2 == 0 ){
        marks[i][j]= 0;
    }
    
}
    }
    console.log(marks);

    // count odd nunmbers  
   let ount =0;
    for(let i = 0 ; i<marks.length; i++){
    for(let j = 0 ; j<marks[i].length ; j++){
     if(marks[i][j] % 2 != 0 ){
      ount++;
    }
    }
}
console.log(ount);


//add new inner array 
 let v = [["simran"],["pooja","aisha"]];

 v.push(["gaurav","kirAN"]);
 console.log(v);

 // reverse array 

 let reverse =[];
 for(let i = marks.length-1;i>=0; i--){
    for(let j = 0 ; j<marks[i].length; j++){
        reverse.push(marks[i][j]);
    }
    
 }
 console.log(reverse);
// let m=[]
//  for(let k=0, i = marks.length-1;i>=0; i--,k++){
//     for(let j = 0 ; j<marks[i].length; j++){
//         m[k][j]=marks[i][j]
//     }
    
//  }



// printing the sum of nested element 
let indx = 0 ;
let max = 0 ;
let matrix =[
    [1,2,3],
    [4,5,6],
    [0,1,0]
]

for(let i = 0 ; i < matrix.length ;i++  ){
let sum = 0 ;
for(let j = 0 ; j <matrix[i].length ; j++){
        sum = sum + matrix[i][j];
        
        
    
        }     
    if(sum> max){
        max = sum; 
    indx = i ;
    }
    



}
console.log(indx)