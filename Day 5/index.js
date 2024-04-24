
function checkNo(){
    const num=document.getElementById("number").value;

    if(!num){

        alert("Please enter the number");
    }
    else if(num%2==0 ){
        alert(`No ${num} is even`);
    }
    else{

        alert(`No ${num} is Odd`);
    }
}