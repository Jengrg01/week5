/*const person = new Object();
person.firstName = "Jack";
person.lastName = "Doe";
person.age = 14;

document.getElementById("demo").innerHTML = person.firstName + person.lastName + person.age;

function employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

e = new employee(90, "Jack", 30000);
*/

function validation(){
    let username = document.getElementById("kimi").value;
    let password = document.getElementById("no").value;
    if(username==""){
        alert("Please enter username blind person :))");
        return false;
    }
    else if(password==""){
        alert("Why you trynna go with no password");
        return false;
    }
    else if(password.length<=5){
        alert("The password is too short");
        return false;
    }
    else{
        alert("You have logged in successfully!");
        return true;
    }
}
validation()