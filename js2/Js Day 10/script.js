const head=document.getElementById("heading");
//head.innerHTML="<i>New heading</i>"

console.log(head.innerText)//it will only show the visible text
console.log(head.textContent)//it will show all the text inculding hidden text
console.log(head.innerHTML)//it will show all the text with its tag/element

//create a new element annd set its content
//const container =document.createElement("p");
//newparagraph.textContent="this is a dynamically created paragraph.";
//console.log(newparagraph.textContent);

//Append the new element to the container
//const container =document.getElementById("container");
//container.appendChild(newparagraph);

//const con=document.getElementById("container");
//const para+con.querySelector("p")

//remove element
//document.querySelector("#container p").remove();

//Event handle 
function handclick(){
    document.getElementById("output")
    textContent="Button Clicked";
}