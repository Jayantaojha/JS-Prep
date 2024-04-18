let promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      let success = true; // Change to false to simulate rejection
      if (success) {
        resolve("Operation completed successfully!");
      } else {
        reject("Operation failed!");
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Using the promise

promise
.then((resolve) => {
    console.log(resolve);
})
.catch((error) => {
    console.log(error);
})
.finally(() => { // it runs by default
    console.log("The promise is either resolved or rejected");
})