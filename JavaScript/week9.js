console.log("examples");
/*let a = 6;
let b = 7;
let sum = a + b;
console.log(sum);*/
/*var a = 6;
var b = 7;
var multiplicaton = a * b;/l./
console.log("The product is: " + multiplicaton); */
/*const PI = 3.14;
let radius = window.prompt("Enter radius: ");
let circumference = 2 * PI * radius;
console.log("The circumference of the circle is: " + circumference);*/
/*function bark(){
    console.log("The dog is barking");
}//this is how function is used in javascript
bark(); //need to call function */
/*let age = window.prompt("Enter the dog's age: ");
function Aged(){
    if(age > 10){
        console.log("The dog is old and can't run");
    }
    else{
        console.log("The dog is young.");
    }
}
function sleep(){
    if(age > 10){
        console.log("The dog is old and sleepy.");
    }
    else{
        console.log("The dog is energetic.");
    }
}
Aged();
sleep();*/
document.getElementById("myBttn").onclick = function(){
    let radius = document.getElementById("myNumber").value;//javascript ma document is inbuilt for object variable like in java where object is created to call function
    console.log(radius);
    const PI = 3.14;
    let circumference = 2 * PI * radius;
     //document.getElementById("circumference").innerHTML = circumference;
     document.getElementById("circumference").append(circumference);
     alert("Hi :D")//sends popup messages
}