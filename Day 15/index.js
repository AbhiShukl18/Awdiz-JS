// ----------Binary Search Part-2---------

var array=[1,2,3,4,5,6,7,8,9,10];  // [6,7,8], [7,8]
target=7;

function binarySearch(array, target){

    var leftindex=0;  //0, 5
    var rightindex=array.length-1; //9, 7
    
    while(leftindex<=rightindex){  //0<=9 T, 5<=9 T, 5<=7 T

        var midindex=Math.floor((leftindex+rightindex)/2); //(0+9)/2=4, (5+9)/2=7, (5+7)/2=6
        // console.log(midindex); 
        // rightindex=-1

        if(array[midindex]===target){ // 5===7 F, 8===7 F, 7===7 T
            return midindex;  //Output
        }
        else if(array[midindex] < target){  //5<7 T , 8<7, F
            left= midindex+1;               // left=4+1=5
            console.log(array[midindex]); //
            
        }
        else if(array[midindex] > target){  // , 8>7 T
            right=midindex-1                // , 8-1=7    
            console.log(array[midindex]);
            

        }
    }
}

binarySearch(array, target)