
 
 const apiCall= new Promise((resolve, reject) => {

  reject("API call failed");


}).then(message => {
  console.log(message);
}).catch(error => {
  console.error('Error:88888', error);
});