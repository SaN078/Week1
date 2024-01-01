const heading = document.querySelector("#SaN");

heading.innerHTML = "<em> Hello DOM!! </em>"

//changing the div style

const boxDiv = document.getElementById("box");
boxDiv.style.backgroundColor = "blue";
boxDiv.style.margin = "40px";
boxDiv.style.border = "10px solid red"

//events

const userInput = document.querySelector("#userInput");
const greeting = document.querySelector("p");
greeting.innerText='Hello Someone';

console.log(userInput);

userInput.addEventListener('keyup',function(){
    if(userInput.value){
        greeting.innerText=`Hello ${userInput.value}`;
    }
    else{
        greeting.innerText = 'Hello Someone'
    }
});



function getFruit(fruitName){
    return new Promise((resolve,reject)=>
    {
        if (fruitName==='watermelon'){
            setTimeout(() => {
                reject('Sorry we are out of watermelon');
            }, 2000);
        }
            else{
                setTimeout(() => {
                    resolve(`Here is your ${fruitName}`);
                }, 1000);
            }
    })
}


getFruit('banana')
.then((data)=>
{
    console.log(data);
})

.catch((err) =>
{
    console.log(err);
});


function arrayManipulation(arr, operationCallback, filterCallback) {
    const manipulatedArray = arr.map(operationCallback);
  

    const filteredArray = manipulatedArray.filter(filterCallback);
  
    return filteredArray;
  }
  
  // Example usage:
  
  // Callback function to double each element
  const doubleOperation = (num) => num * 2;
  
  // Callback function to filter even numbers
  const isEven = (num) => num % 2 === 0;
  
  // Sample array
  const inputArray = [1, 2, 3, 4, 5, 6];
  
  // Using the arrayManipulation function
  const result = arrayManipulation(inputArray, doubleOperation, isEven);
  
  console.log(result); 
  
  async function fetchUserData(userId) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users?id=${userId}`;
  
    try {
      // Fetch user data from the API
      const response = await fetch(apiUrl);
  
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error(`Failed to fetch user data. Status: ${response.status}`);
      }
  
      // Parse the JSON response
      const userData = await response.json();
  
      // Check if the user data array is not empty
      if (userData.length > 0) {
        // Extract and return the desired user information
        const { name, email } = userData[0];
        return { name, email };
      } else {
        throw new Error(`User with ID ${userId} not found.`);
      }
    } catch (error) {
      throw new Error(`Error fetching user data: ${error.message}`);
    }
  }
  
  // Example usage:
  const userId = 1;
  
  fetchUserData(userId)
    .then((userData) => {
      console.log(userData); // Output: { name: 'Leanne Graham', email: 'Sincere@april.biz' }
    })
    .catch((error) => {
      console.error(error.message);
    });
  