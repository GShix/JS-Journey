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