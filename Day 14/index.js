
const myName="Abhishek"
const word="sh"
console.log(myName.includes(word));
///--------
var array=["cat","bat","rat","hat","apple","banana","orange"];
var word1="at";
function find(array, word1){
    for(var i=0; i<array.length; i++){
        

        
        if(array[i].includes(word1)){
            console.log(array[i]);
        }
    
    }

}

find(array, word1)


// ----------LINEAR SEARCH---------------

var input=[1,4,5,9,8,10];
var target=1;

for(var i=0; i<=input.length-1; i++){
    
    if(input[i]===target){
        console.log(`Search matched:-  ${target}  is found at index ${i}`);
        break;
    }
    else{
        console.log('Target value not found')
        break;
    }
}


//---------------------Binary Ssearch- Part1----------------

// Step1- Find the middle element of the given array

// Step2- Compare the target element with the middle element of array

// Step 3
// (a)- IF target matches with middle element then Search is completed and return Index as output
// (b)- IF target value is less than the middle element then use LEFT side elements of the middle element of given array and repeat steps STEP-1, STEP-2, STEP-3(a,b,c)
// (C)- IF target value is greater than the middle element then use RIGHT side elements of the middle element of given array and repeat steps STEP-1, STEP-2, STEP-3(a,b,c)


var array=[4,1,0,9,21];
var target=0;

function binarySearch(array, target){

    var middleindex=Math.floor(array.length/2);
    // console.log(array[middleindex])

    if(array[middleindex]===target){

        console.log(`Search matched`);
    }



}

binarySearch(array, target)