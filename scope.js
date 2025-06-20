// let and cons 

// 1. if let declaretation is done globally , scope become global .

// 2. if let declareation is done inside a function ,scope becomes that function 

// 3. if let declaration is done inside a block ,scope becomes that block 



let a = 2; 
c1 (a);                             ///2

function one (){
    c1(a);                     //2
    let b = 4 ;
    c1(b);                       //4
}
 c1(b);                       //error                 

 if (true){
    let c = 6;
    c1(6);                                           //6
 }
 c1(c);                       // error 


 function two(){
    if(true){
        let d = 8 ;
        c1(d);                               ///8 
    }
c1(d);                                   //error 
}