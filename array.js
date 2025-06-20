let marks = [1,2,3,4,5];
console.log(marks[2]);
console.log(marks.length);
console.log(marks);

for(let i = 0 ; i<= marks.length; i++){
    console.log(marks[i]);

}

for(let elem of marks ){
    console.log(elem);
}



// array operation 

// inserting an element in the array the end 
let arr = [2,4,5,6];
let x = arr.push(100);


// inserting element at the start 
arr.unshift(100);
console.log(arr);





/// removing an element 

//removing from end 

let y = arr.pop();
console.log(arr);
console.log(x);


////removing from start 
arr.shift();
console.log(arr);

//removing from middle 
// arr.splice(starting index no. which we want to delete   ,    no. of elements to be removed ,elem to insert)

arr.splice(2,1);
console.log(arr);


//inserting in between 
arr.splice(3,0,100);


//inserting and deleting an element 

arr.splice(3,2,1000)



//        arr.splice  (1.element index no ,  element to remove , inserting the element )



// finding array index 
console.log(arr.indexOf((6)));



//reversing an array 
// arr.reverse();
//console.log(arr);


//sorting an array 

let a = [3,1,2,5,4,3,];
a.sort();
console.log(a);


// conact
let b = [1,2,3] ;
let c = [2,3,3];
let newarray = b.concat(a);
//console.log(b);
//console.log(c);
// console.log(newarray);



let ary = [2,4,6,8];

//for each ();
// higher order function 
// takse finction as an argument 
// foreach is a function 
// it return undefined
ary.forEach((elem)=>{
    console.log(elem*2);
    ary[0] = 100;

    })
console.log(ary)


    //Map()
    let newArr = arr.map((elem)=> {
        return elem * 2;
    });
    console.log(arr);

    console.log(newArr);


    //it returns new transformed array
    // it does not modify original array 
    



    //filter ()

    let d  = [1,1,2,3,4,56,2];
    let filterarr = a.filter((i)=> {
        return elem>5 ; 
    });

    console.log(filterarr);

