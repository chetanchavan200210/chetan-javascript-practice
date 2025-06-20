
// if else condition practice 

var score  = 16 ;
if (score > 90 ) {
    console.log("grade A");

}
else if (score > 80 ){
    console.log ("grade B");
}
else if (score > 70){
    console.log ("grade C");
}
else if (score > 60){
    console.log ("grade C");
}
else if (score < 10 ){

    console.log ("fail");
}

// switch case practice 

var day = "thursday" ;
switch (day){


case "monday" : 
console.log ("i am hitting chest today ");
break;

case "tuesday" : 
console.log ("i am hitting chest today ");
break;

case "" : "wednesday"
console.log ("i am sleeping today ");
break;

case "thursday" : 
console.log ("today is my day off  ");
break;

case "friday" : 
console.log ("i am working ");
break;

case "saturday" : 
console.log ("i am working on laptop");
break;
default:
    console.log ("invalid");
}




//  ternary operator 

var age = 15 ;
var status = (age > 18) ? "Eligible" : "Not eliglible";

console.log(status);
