const num=[1,2,3,4,5,6,7,8,9];
console.log(num);

// Creating as Object
const num1 = new Array(1,2,3,4,5,6,7,8,9);
console.log(num1[num1.length-1]);
console.log(num.length);

// Push -> Insert new Array_Items at the last
num1.push(10);
console.log(num1); 
// OR we can directly insert like;
console.log(num1.push()) // ->It insert new items and show Arr_length

// Unshift -> Insert new Array_Items at the first
console.log(num1.unshift(0));
console.log(num1);

// Pop -> Delet the last Array_Items
console.log(num1.pop(10));
console.log(num1); // -> Deleted '10'

// Shift -> Delet the first Array_Items
console.log(num1.shift(0));
console.log(num1); // -> Deleted '0'

// Update arr_items by their "Indexs"                                                                                                                                            
num1[0] = 0; /* String: "Dambar" | Object: {num1: 80} */
console.log(num1); // -> Updated array with '0' at the '0'th index

// IndexOf 
let num2= ["Minraj", "Dambar", "Santosh", "Nabin","Dmabar", "Minraj"];
console.log(num2.indexOf("Dambar")) // -> Returns First met item's index
console.log(num2.indexOf('Syana')); // -> Syana is not in num2, so it returns "-1"

// lastIndexOf()
console.log(num2.lastIndexOf("Minraj"));

// includes()
console.log(num2.includes("Nabin")); // -> Reutrns "true" | check whole arr_indexes
// To check it after a certain index
console.log(num2.includes("Santosh",3)); // -> Returns "false" as there is no "Santosh" after index '3'

// find() method
console.log(num1.find(Element => Element >5)); // -> find method for primiive data type

// For Reference data type
const arry1 =[{
    name:'Dambar',
    rollno: 1
    },
    {
        name: 'Minraj',
        rollno: 2
    },
    {
        name: 'Nabin',
        rollno: 3
    }
];
console.log(arry1.find(function(Element){
    return Element.rollno ===2
}))

// Arrow function -> First method
console.log(arry1.find((Element) => {
    return Element.name === 'Dambar'
}))
/* Second method */
console.log(arry1.find(element => element.name === "Dambar"));

// Spread operator -> Copy all/part if an existing arr/obj to another arr/obj
let name1 = ['Harry', 'Ram', 'Krishna'];
let name2 = ['Dambar', 'Santosh', 'Minraj'];
let nameSum = name1.concat(name2); // Concat method 1
console.log(nameSum);
let spreadSum = [...name1, ...name2]; // Concat method 2
console.log(spreadSum);

// slice() method -> Access items with specified index 
console.log(spreadSum.slice(2,5));
