let a = 5;

if (a % 3 ===0 && a % 5 ===0 ){
    console.log("fizzbuzz")
}
else if (a % 3 ===0 ){
    console.log("fizz");

}else if (a % 5 ===0  ){
    console.log("buzz")
}else {
    console.log("invalid input")
}