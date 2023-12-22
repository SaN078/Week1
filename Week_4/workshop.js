// Buggy Code (Correct below code)
// Manish created an infinite loop! Help him by fixing the code in the code tab to pass this
// challenge. Look atthe examples below to get an idea of whatthe function should do.

//Degugged code


function printArray(number)
{
    var newArray = [];

    for (var i=1; i<=number; i++)
    {
        newArray.push(i);
    }
    return newArray;
}


const array = printArray(70)
console.log(array);


//How Much is True?
// Create a function which returns the number of true values there are in an array.

function howMuchisTrue(arrey)
{
    let trueC = 0;
    for (let i = 0; i<arrey.length;i++)
    {
        arrey[i] == true ? trueC+=1 : trueC+=0;
    }
    return trueC;
}

console.log(howMuchisTrue([true,false,true,true,false,true,true]));

// //Converting Objects to Arrays
// Write a function that converts an objectinto an array, where each element represents a
// key-value pair in the form of an array.
const ref = {
    name:'Sangeet',
    address:'Thimi',

}
function objToarray(person)
{ 
    let propertyNames = Object.keys(person);
    let propertyValues = Object.values(person);
    const entries = Object.entries(person);
    return entries;
}


console.log(objToarray(ref));