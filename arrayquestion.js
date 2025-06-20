
// sum of array using fuction 

let arr = [1,2,3,4,5,6];
let sumarr = 0 ;
function sum (arr){
    for(let i = 0;i< arr.length; i++){
        sumarr += arr[i] ;
    }

    return sumarr;
}
console.log(sum(arr));


// largest element in array 


let ary = [ 1,2,3,45,,78,10];

function findMax (ary){
    let max = ary[0] ;
    for(let i = 1 ; i<ary.length;i++){
if (max < ary[i]){
    max = ary[i];

}
    }
return max;


}


console.log(findMax(ary));

//count even no 
let count = 0;
function evenNO(arr){
    for(let i = 0 ; i<arr.length;i++ ){
        if(arr[i] % 2 == 0 ){
            count++;

        }
    }
return count;
    }
 console.log(evenNO(arr));   

 // reverse an array ;

 let len = arr.length-1;
 function reverse (arr){
    let array = [];
    for(let i = len ; i>=0;i-- ) 
        {
            array[i] = arr[i] ;
        }
            return array;  
}

console.log(reverse(arr));



function reverse(aryy) {
    let array = [];
    let len = aryy.length;

    for (let i = len - 1; i >= 0; i--) {
        array[len - 1 - i] = arr[i]; // Put arr[i] in reverse order
    }

    return array;
}

let aryy = [1, 2, 3, 4, 5, 6];
console.log(reverse(arr));



// filter numbers greater than 5 
let ayy = []; 
let j=0;
function greater(arr){
let n = 5;
    
for(let i = 0 ;i <arr.length;i++){
if (arr[i]> n ){
ayy[j] = arr[i];
j++;
}
    }

    return ayy;
    


 }
 console.log(greater(arr));


 // double the each element value in the array 
let rry=[];
let l = 0 ;
 function doubleArray (arr){
    for(let i = 0 ;i<arr.length; i++){
        rry[l] = arr[i]*2;
        l++;
        
    }
return rry; 
}

console.log(doubleArray(arr));

console.log(arr);


//print all element using for each 

arr.forEach((i)=>
    {
        console.log(i)
    });





//print double array element using map


function doubleELem (arr){
    let newArr = arr.map((elem)=>
        {
            return elem*2;
        });
return newArr;
    }
    console.log(doubleELem(arr));

//using filter get even no 

function evenNo (arr){
    let res = arr.filter((element)=>{
        return element % 2  == 0 ;

    });
return res;
}

console.log(evenNo(arr));

//counst positive number using 

arr.for



//convert all string to uppercase using 
function Uppercase(ar){
    let ap = arr.map((elem)=>{
    return elem.toUpperCase();
    })
return ap;    

}
let ar = ["candy","sugar","paper","chocolate"];
    console.log(Uppercase(ar));


//print elelment index  using  for each


function greaterThan(ars){
let ele = ars.filter((element)=>{
return element > 50; 
});
return ele;
}
let ars = [50,60,70,25,46,70,95];
console.log(greaterThan(ars));