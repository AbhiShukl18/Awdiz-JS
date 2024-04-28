//Functions
// -----------Simple addition--------------
// function addition(){

//     var num1=10;
//     var num2=20;
//     return num1+num2;
// }
// const ans=addition();
// console.log(ans);

//------------- CalC----------------

console.log("CALCULATOR");
function add(num1, num2){
return num1+num2
}

function sub(num1, num2){
    return num1-num2
    }
function multi(num1, num2){
        return num1*num2
        }
function div(num1, num2){
            return num1/num2
            }
                
        console.log(add(10,50));
        console.log(sub(10,50));
        console.log(multi(10,50));
        console.log(div(10,50));

// ----------Check even or odd using function--------------
console.log("Check even or odd using function");

        function checkifevenorodd(num){
            if(num%2===0){
                console.log(`${num} is even`);
            }
            else{
                console.log(`${num} is odd`);
            }
        }

        console.log(checkifevenorodd(4));


        // -------------ARRAYS----------------
console.log("ARRAYS");

var students=["Abhi","Honey","Rudra"]
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log([students.length]);
console.log(students[students.length-1]);




// ---- FOR LOOP----------

//for(start; end; sequence){code}

// Q. print 1-100 using for loop

console.log("print 1-10 using for loop")
for(i=1;i<=10;i++){

    console.log(i);
}


//Q. Print no from 10-60 with gap of 4

console.log("Print no from 10-60 with gap of 4")
for(i=10; i<=60; i+=4){

    console.log(i);
}

// Q. Print no from 33-76 with gap of 3 also it mus be even

console.log("Print no from 33-76 with gap of 3 also it mus be even")

for(i=33; i<=76; i+=3){
    if(i%2==0){

        console.log(i);
    }
    
}

//Q. whats the sum of no from 23-89 with gap of 2

console.log("whats the sum of no from 23-89 with gap of 2")

var num=0
for(i=23; i<=89; i+=2){
if(i%2===1){
    num=num+i;
}
}

console.log(num);

//Q. multiply of 1-5 nos

console.log("multiply of 1-5 nos")

num=1;
for(i=1; i<=5; i++){

    num=num*i
}

console.log(num);

//---------Multiply of nos in array------------
console.log("Multiply of nos in array")

var number=[2,23,5,10];
var multi=1;
for(i=0; i<=number.length-1;i++){
    
    multi= multi*number[i];
}

console.log(multi);