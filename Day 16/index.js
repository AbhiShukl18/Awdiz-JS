//-------Event Loop----------------

console.log("Before");
setTimeout(()=>{

    console.log("Inside set Timeout1");
}, 5000)

setTimeout(()=>{                    // executes first as time is less than previous

    console.log("Inside set Timeout2");
}, 2000)


setTimeout(()=>{                    // executes first as time is less than previous

    console.log("Inside set Timeout3");
}, 1000)
console.log("After")



// setInterval(()=>{

//     console.log("Inside set Timeout");
// }, 5000)


