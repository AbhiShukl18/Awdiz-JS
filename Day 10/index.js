var array=[5,6,7,8,9,4,1,0,9,8,21,3,12];
var target=18;
sum=0;
for(i=0; i<array.length-1; i++)
{
    // console.log(array[i]);

for(j=i+1; j<array.length-1; j++)

// console.log(array[j]);

{

    for(k=j+1; k<array.length-1; k++ )
    {
        // console.log(array[k]);

        sum=array[i]+array[j]+array[k];
        if(sum===target){
           console.log(array[i],array[j],array[k]);
        }
    }

}

}


    // -----PUSH--------(adds the specified elements to the end of an array and returns the new length of the array.)

var students=["Abhi","Abhishek","Rudra","Honey","Rudransh"];
console.log(students);
students.push("Shiv");
console.log(students);
students.push("Ankit","Anuruddha");
console.log(students);


// // ----------------POP--------------------(removes the last element from an array and returns that element)

const fruits=["Apple", "Banana","Orange"];
console.log(fruits.pop());
console.log(fruits.pop());


// // ------Shift--------------------(removes the first element from an array and returns that removed element)

const city=["Kanpur","Lucknow","Agra","Jhansi"];
console.log(city.shift());


// // -------slice-----------(returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.)


const animals=["Dog", "Cat","Horse","Lion"];

console.log(animals.slice(2)); //takes value from index 2 till end
console.log(animals.slice(1,3));  // takes value from index 1 till index 2
console.log(animals.slice(-2));     // takes value from last 2 index
console.log(animals.slice(1,-2));       // takes value from index 1 and removed 2 elements from last
console.log(animals.slice());           // no elements removed as index not specified



// // -----splice----------(instances changes the contents of an array by removing or replacing existing elements and/or adding new elements )

const parts=["Ear","Nose","Eyes","Mouth","Lips"];

parts.splice(1,0,"Hands");     // inserted "hands" in index 1
console.log(parts);

parts.splice(2,2,"Fingers","Liver");       // replaced "Fingers and liver" in place of Eyes and Mouth-- 2 elements has been added from index 2
console.log(parts)