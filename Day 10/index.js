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