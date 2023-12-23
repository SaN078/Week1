//nested object

const me = {
    name:
    {
        firstName:'ram',
        lastName:'thapa',
        username:{
            uname: 'ram123',
        },
    },
    Address: {
        city: 'Kathmandu',
        country: 'Nepal',
        state: 3,
    },
}

console.log(`${me.name.firstName} lives in ${me.Address.city}`);


//function declaration

// function sayHi(name){
//     console.log('Hi ' + name);
// }

// const fname= prompt("Enter your Name");
// sayHi(fname)


function add (num1, num2)
{
    let result = num1 + num2;
    return result;
}

let res = add (500,600);
console.log(res + ' is the computed value I got from the function');


//expressions

const add2 =  function (){
    console.log(2);
}

add2();

const multiply2 = function (num1,num2){
    return num1*num2
}

let res1ult = multiply2(8774563211,7154896635);
console.log(res1ult);


//arrow functions

const subtract = (a,b) => a+b;


const multiplyby2 = input => {return input*2};
let r = multiplyby2(50);
console.log(r);

const multiplybytwo = (num1,num2) => num1 * num2;
let s = multiplybytwo(75,85);
console.log(s);

setTimeout(function(){
    console.log('Hi');
},9000);


//iife

(function sayHello()
{
   setTimeout(function(){
    console.log("Hello");
   },10000) 
})();

//higher order functions


function copyArrayandManipulate(array, instructions)
{
    const output = [];
    for (let i=0;i<array.length;i++)
    {
        output.push(instructions(array[i]));
    }
    return output;
}

function multiply_2(input) {return input*2;}
const result =  copyArrayandManipulate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],multiply2);



//Tutorial Questions


// //Create an array of 10 numbers and print out each element using for
// loop, foreach loop and map method

const items = [1,2,3,4,5,6,7,8,9,10];
function iterationFor(array)
{
    
}