function myFunction(){
    var localVariable = "I'm a local scope";
    console.log(localVariable);
}

myFunction();

let student1 = {
    name: "Kevin",
    email: "kevin.gmail.com",
    grade101:3.5,
    grade102:3.9
}

let student2 = {
    name: "Thomas",
    email: "thomas.gmail.com",
    grade101:3.7,
    grade102:3.2
}

let student3 = {
    name: "John",
    email: "john.gmail.com",
    grade101:3.9,
    grade102:3.8
}
console.log(student1);
console.log(student2);
console.log(student3);

let myArray=[10,false,"Richard",student2];
console.log(myArray[2]);