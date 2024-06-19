// Q#01 Write a simple asynchronous TypeScript function fetchGreeting that returns a 
//greeting message after a 2-second delay using setTimeout.

function fetchGreeting():Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello world!");
        }, 2000);   
    });
}
fetchGreeting().then(greeting=>{
    console.log(greeting);
    
})


// Q#02 Write a function simulateTask that simulates a task by logging "Task started", 
//   waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask():void {
    console.log("task started");
    setTimeout(()=>{
        console.log("task completed");
        
    }, 1000)
}
simulateTask();

//  Q#03  Write a function fetchData that returns a Promise which resolves with the string 
//  "Data fetched successfully!" after a delay of 1 second.

function fetchData():Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data fetched successfully!");
        }, 1000)
    })
}
fetchData().then((message)=>{
    console.log(message);
    
})

//  Q#04  Write a function fetchWithError that returns a Promise. It should randomly either 
//  resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
//  delay of 1 second. Handle the rejection using .catch

function fetchWithError(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(Math.random()>0.5){
               // resolve("data fetched successfully!");
            } else {
                reject("data fetched failed!")
            }
        }, 1000)
        
    });
}
fetchWithError().then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
    
})


//  Q#05 Write a function executeSequentially that executes two functions fetchData and 
//  processData sequentially using Promises, and logs the results in the order they are 
//  called.


function executeSequentially(fetchData,processData){
    fetchData().then(result1=>{
        console.log("fetchData result:",result1);
        return processData(result1)
        
    })
    .then(result2=>{
        console.log("processData result:",result2);
        
    })
    .catch(error=>{
        console.log("error:",error);
        
    });
}
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data from fetch");
        }, 1000 );
    })
}
function processData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`processed ${data}`);
        }, 1000);
    })
}
executeSequentially(fetchData,processData)