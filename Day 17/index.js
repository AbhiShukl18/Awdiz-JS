function getdata(){

return new Promise((resolve, reject)=>{

    setTimeout(()=>{
        const result= false;
        if(result){
            resolve("Data Successfully received")
        }
        else{
            reject("Error")
        }
    }, 4000)
})

}

getdata().then((Response) => {
    console.log(Response)
}).catch((error) => {
    console.error(error)
});