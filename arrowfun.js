//normal function
let Student =function(){
    name1= ['Dambar','Santosh','Minraj','Don'],
    address= 'Nepalgunj'
}
Student();

//Arrow function
let Student1 =()=>{
    name1= 'Dambar',
    address= 'Nepalgunj'
}
console.log(Student1());
//Shortcut of Arrow function
let student3 = () =>"Nepal";
console.log(student3());
let student = (a,b) =>a+b;
console.log(student(10,5));
