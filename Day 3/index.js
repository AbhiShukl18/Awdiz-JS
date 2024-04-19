//SCOPE and 


//LET AND CONST- BLOCK LEVEL SCOPE and VAR:- GLOBAL LEVEL SCOPE


// {
//     const no=20;{
//         console.log(no);
//     }
// }
// console.log(no);

let num1=10;


{
    const num2=20;
var num3=30;
    console.log(num1);
    {

        {
            console.log(num3);
            console.log(num1);

        }
        console.log(num2);
    }
}

console.log(num3);


num=10;
console.log(num);
var num;

const fname="abhi";
{
        console.log(fname);
        {
                console.log(fname);     
        }

}
console.log(fname);