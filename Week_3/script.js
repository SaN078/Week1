//strings
const firstName= 'Ram';
console.log(firstName);
const lastName = 'Kumar';
console.warn(true);
console.log("My Name is "+firstName+" "+lastName);

//Numbers
const pi = 3.14;
console.log("The Value of Pi is "+pi);

//Booleans
const isMarried = false;

//Null
const nullVar = null;
console.log(nullVar);

//Undefined
const undefinedVar = undefined;
console.log(undefinedVar);

//arrays
const numbers = [10,20,30]
console.log(numbers[1]);

//DIY





var num1 = 420;
var num2 = 406;
sum = num1 + num2;
console.log("The sum is "+ sum);


var myName = "Sangeet";
console.log("Hello, I am "+ myName);

//objects
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
    };

//If/else

var age = 20;
if (age>18) {
    console.log("Qualified for Driving");   
}
else{
    console.log("Not Qualified for Driving");
}


//elseif

// let book = 'Maths';
// if (book == 'Maths'){
//     console.log("Maths is my favourite subject");
// }
// elseif (book == 'Social')
// {
//     console.log("It should not exist");
// }
// elseif (book == "Economics")
// {
//     console.log('What?');
// }


//loop

for (let i = 0; i<=10; i++)
{
    console.log("number"+i);

}

//break and continue
for (let i = 0; i<=10; i++)
{
    
    if(i === 5){
        console.log("Breaking at 5...........");
        continue;
    }
    console.log(i);
}

let x = add(5,6)
//functions
function add(a,b){
    return a+b;
    console.log("HELLO WORLD");
    }
console.log(x);