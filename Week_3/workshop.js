// Area of Triangle

function areaOftriangle (height,base) 
{
    return height * base * 0.5;
}


const area = areaOftriangle(5,6);
console.log(area);

//  Return Something to Me!

function giveMesomething(something) 
{
    return "Something " + something;
}

const smth = giveMesomething("Dipuuuuu");
console.log(smth);

//Basketball Points

function basketballPoints (one, three) 
{
    return one*1 + three*3;
}

const point = basketballPoints(15,20);
console.log(point);


//Less Than 100?

function lessthanHundred(x,y) 
{
    return x+y < 100 ?  true:false;
}


const numbers = lessthanHundred(50,25);
console.log(numbers);

//Add up the Numbers from a Single Number

function addUp(limit)
{
    let temp_val = 0;
    while (limit > 0)
    {
        temp_val+=limit;
        limit--;
    }
    return temp_val;
}

const add = addUp(10);
console.log(add);

//Oddish vs. Evenish

function odd_even (variable)
{
    let temp_val = 0;
    let add = 0;
    for (let i=0;i<variable.length;i++)
    {
        temp_val = variable % 10;
        add = add + temp_val;
        variable = variable / 10;
    }
    return add % 2 == 0 ? "oddish" : "evenish";
}

const input = odd_even(52);
console.log(input);

// Prime number in a range
function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
function primeInRange(n1,n2){
    for(let i=n1; i<=n2; i++){
        if(isPrime(i)){
            return true;
        }
    }
    return false;
}
console.log(primeInRange(3,5));

const prime = primeInrange(20,40)
console.log(prime);