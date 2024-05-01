var array=[5,15,10,8,21,7];
var target= 5;
var sum=0;
for(i=0; i<=array.length-1; i++)
{
    // console.log(i);
// console.log(array[i]);


for(j=i+1; j<array.length;j++){
    // console.log(i);
    // console.log(j);
    // console.log([array[j]]);
    // console.log([array[i]],[array[j]]);
    // sum=array[i]+array[j];
     sum=array[i]+array[j];
    //  console.log(sum);
if(sum===target)
        {
            console.log(array[i],array[j]);
            }
        }
}

