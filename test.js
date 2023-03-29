//create a promise object which will be resolved when a fetch request is successful
//do not use .then or .catch method
const promise = fetch("https://jsonplaceholder.typicode.com/users");
//create a function which will be called when the promise is resolved
const success = (data) => {
  console.log(data);
};
//create a function which will be called when the promise is rejected
const error = (err) => {
  console.log(err);
};
//call the .then method on the promise object and pass the success function as an argument
promise.then(success);
//call the .catch method on the promise object and pass the error function as an argument
promise.catch(error);
