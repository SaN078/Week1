const heading = document.querySelector("#SaN");
heading.innerText = "Some Text";

heading.innerHTML = "<em> INNER HTML </em>"

const myDiv = document.createElement("div")
const text = document.createTextNode("I am in a div")

myDiv.appendChild(text);

document.body.appendChild(myDiv);
myDiv.classList.add("box2")

//changing the div style

const boxDiv = document.querySelector("#box");
boxDiv.style.backgroundColor = "black";
boxDiv.style.margin = "40px";
boxDiv.style.border = "10px solid red"

//events

const userInput = document.querySelector("#userInput");
const greeting = document.querySelector("p")
greeting.innerText='Hello Someone'

console.log(userInput);

userInput.addEventListener('keyup',function(){
    if(userInput.value){
        greeting.innerText=`Hello ${userInput.value}`;
    }
    else{
        greeting.innerText = 'Hello Someone'
    }
});


const person = {
    fullname : 'Ram Thapa',
    age : 69,
    speak: function()
    {
        console.log('My name is '+ this.fullname);
    },
}
person.speak();


function task1()
{
    setTimeout(function ()
    {
        console.log('Task 1 Complete');
    }, 3000);
    
}

function task2()
{
    setTimeout(() => {
        console.log('Task 2 Complete');
    },2000);
}

function task3()
{
    setTimeout(() => {
        console.log('Task 3 Complete');
    },1000);
}

task1();

task2();

task3();

console.log('All task completed');