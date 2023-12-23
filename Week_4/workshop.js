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

// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote
// count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.


function voteCount(votes)
{
    return votes.upVotes - votes.downVotes;
}

const votes = voteCount({upVotes : 800 , downVotes : 200});
console.log(votes);


// Older Than Me
// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialized with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than /the same age as} me.

class person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    compareAge(anotherPerson)
    {
        if (this.age < anotherPerson.age)
        {
            return(`${anotherPerson.name} is older than ${this.name}`);
        }
        else if (this.age > anotherPerson.age)
        {
            return(`${anotherPerson.name} is younger than ${this.name}`);
        }
        else
        {
            return(`${anotherPerson.name} is the same age as ${this.name}`);
        }
    }
}


const p1 = new person('Sangeet',19);
const p2 = new person('Avash', 20);
const p3 = new person('Binda', 38);

const result1 = p1.compareAge(p2);
const result2 = p2.compareAge(p3);
const result3 = p3.compareAge(p1);

console.log(result1);
console.log(result2);
console.log(result3);


// Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price.

function calculateTotal(groceries)
{
    let totalPrice = 0;
    for (let i=0; i<groceries.length;i++)
    {
        const rate = groceries[i];

        totalPrice += (rate.quantity * rate.price);
    }
    return totalPrice;
}

const products = [{
    productName :'Cereal',
    price : 500,
    quantity : 2
},
{
    productName :'Protein',
    price : 1300,
    quantity : 5
}
];

const priceToPay = calculateTotal(products);

console.log(priceToPay);


// Weekly Salary
// Write a function that takes a list of hours and returns the total weekly salary.

// ● The input list hours are listed sequentially, ordered from Monday to Sunday.
// ● A worker earns $10 an hour for the first 8 hours.
// ● For every overtime hour, he earns $15.
// ● On weekends, the employer pays double the usual rate, regardless how many hours
// were worked previously that week. For instance, 10 hours worked on a weekday
// would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.


function totalWeeklySalary(hours)
{
    let totalSalary = 0;
    const firstEightHours = 10;
    const overtimeHours = 15;
    for (let i = 0;  i < hours.length ;i++)
    {
        if (i ==5 || i==6){
            if (hours[i] <= 8)
            {
                totalSalary+= hours[i]*firstEightHours;
            }
            else
            {
                totalSalary+= hours[i]*firstEightHours + ((hours[i]-8)*overtimeHours);
            }
        }
        else
        {
            if (hours[i] <= 8)
            {
                totalSalary+= (hours[i]*firstEightHours)*2;
            }
            else
            {
                totalSalary+= (hours[i]*firstEightHours + ((hours[i]-8)*overtimeHours))*2;
            }
        }
    }

    return totalSalary;
}


const weeklyHours = [8,8,9,7,4,5,6];
const weeklySalary = totalWeeklySalary(weeklyHours);
console.log(weeklySalary);



// Get Students with Best Test Avg.
// Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.

