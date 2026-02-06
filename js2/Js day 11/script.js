//function handelclick(){
    //document.querySelector("#heading").style.color = "TEAL";
  //  document.getElementById("btn").textContent="color changed!"
//}

//Q2.
const handelclick=() => {
const image = document.createElement("img");
image.setAttribute("src","https://64.media.tumblr.com/f84831129e3ad1f280580223f71a4778/6b09604672976e7b-5b/s1280x1920/edf5e974b6dbe68de0211d58faedefa16dc6a3fc.pnj")

image.setAttribute("alt","kr Mangalam");

document.getElementById("content").append(image);
}