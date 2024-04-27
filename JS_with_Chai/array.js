const myArr = [1,2,3,4,5,'dambar']
// console.log(typeof myArr)

//Array Method
// const newArr = myArr.join();
// console.log(typeof newArr);
// console.log(myArr.pop())
// console.log(myArr.unshift(2))

// console.log(myArr.indexOf())

//splice and slice
console.log(myArr)
const newarr1 = myArr.slice(1,3)
console.log("Array2:",newarr1)
console.log("After slice:",myArr)

const newarr = myArr.splice(1,3);
console.log("Array1:",newarr)
console.log("After splice:",myArr)
