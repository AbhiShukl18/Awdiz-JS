//switch
//DL
//AND OR

function dl(){
    const age=document.getElementById("number").value;

    if(!age){

        alert("Please enter the Age");
    }
    else if(age>18 && age<60 ){
       alert("Congrats!! You are eligible for Permanent Driving License")
    }
    else if(age==18 || age==60){

        alert("You are eligible for Learning Driving License only");
    }

    else{

        alert("Oops!! You are neither eligible for Learning Driving License nor for Permanent Driving License");
    }
}


var day=1;

switch(day){

    case 2:
        console.log("Its monday");
    break;

    case 3:
    console.log("Its Tuesday");
    break;

    case 1:
    console.log("Its Sunday");
    break;

    default:
        console.log("Invalid data entered");
}

