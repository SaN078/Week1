const heading = document.querySelector("#SaN");
heading.innerText = "Some Text";

heading.innerHTML = "<em> INNER HTML </em>"

const myDiv = document.createElement("div")
const text = document.createTextNode("I am in a div")

myDiv.appendChild(text);

document.body.appendChild(myDiv);