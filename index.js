
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 10) {
    console.log(document.documentElement.scrollTop);
    document.getElementById("first-animate").classList.add ("animate__zoomIn");
  }
  if (document.documentElement.scrollTop > 250) {
    console.log(document.documentElement.scrollTop);
    document.getElementById("second-animate").classList.add ("animate__fadeInUpBig");
    document.getElementById("third-animate").classList.add ("animate__fadeInLeft");
    document.getElementById("fourth-animate").classList.add ("animate__fadeInRight");
  }
}
