const heading = document.getElementById("myHeading");
console.log(heading);
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
console.log(heading.textContent);
heading.textContent = "Hello World!";

 const subheading=document.
 getElementsByClassName("sub-heading");
 console.log(subHeading);

 for(let i=0;i<subheading.length;i++){
    subheading[1].style.color="green";
 }