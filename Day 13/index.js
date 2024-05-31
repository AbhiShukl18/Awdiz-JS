// Map- create a new array with the result of calling a provided fnctn on every element (kind of FOR loop)

// const array=[1,2,3,4,5];

// const output=array.map((element)=> element*2);

// console.log(output);

// const array1=[2,5,1,8,9];
// const output1=array.map(
//     (x,y) => 
    
//     x+y
// );

// console.log(output1);


// // For each- executes provided fnctn once for each array element

// var alpha=["a","b","h","i"];

// ab.forEach((element)=>console.log(element));



// //Reduce- Calls specified fnctn for all elements in array- Return value of fnction is accumulated result


// const array2=[1,2,3,44,5];

// const sum= array2.reduce(
//     (accumulator, currentvalue) => accumulator+currentvalue, 0
// );

// console.log(sum);


// // Concat- combine two array and results in a single array

// const arr1=[1,2,3,];
// const arr2=[6,7,];
// const result=arr1.concat(arr2);
// console.log(result);


// // Find- to find element in an array with/without any condition

// const numbers=[1,2,3,4,5,6];
// const output3= numbers.find((numbers) => numbers >4 );
// console.log(output3);

// //Find Index- to find index of any element in an array(if index not found then result -1)

// const array4=[1,4,5,2,0,9]

// const output4=array4.findIndex((array4) => array4>1);
// console.log(output4);

// const output5=array.findIndex((array) => array>10);
// console.log(output5);


//includes--it determines whether an array includes a certain values or not-- Case sensitive

const array6=["Dog","Cat","Rat"];
const res= array6.includes("dog");
console.log(res);

