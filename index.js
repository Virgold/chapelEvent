let element1 = document.getElementById("first-animate");
let element2 = document.getElementById("second-animate");
let element3 = document.getElementById("third-animate");
let element4 = document.getElementById("fourth-animate");


window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.documentElement.scrollTop > 10) {
    console.log(document.documentElement.scrollTop);
    element1.classList.add("animate__slideInUp");
  };
  if (document.documentElement.scrollTop > 250) {
    console.log(document.documentElement.scrollTop);
    element2.classList.add("animate__fadeInUpBig");
    element3.classList.add("animate__fadeInLeft");
    element4.classList.add("animate__fadeInRight");
  }
}
