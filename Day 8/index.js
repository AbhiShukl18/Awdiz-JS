// Q. Print reverse array, using for loop

// var array=[1,2,8,10];
// for(i=0; i<= array.length-1; i++){

//     console.log(array[i]);
// }

// for(i=array.length-1; i>=0; i--){

//     console.log(array[i]);
// }

// Q. Add nos in array which are odd
 var num= [1,4,2,9,80,99];
 var count=0;
 for(i=0;i<=num.length;i++){

    if(num[i]%2===1){

        count+=num[i];
    }
 }

 console.log(count);

 //Q, Find name of students whose name is greater than 4
  
 students=["Abhi","Rudra","Abhishek","Honey"]
 for(i=0; i<=students.length-1; i++){

    // console.log(students[i]);
    if(students[i].length>4){
        console.log(students[i]);
    }
 }