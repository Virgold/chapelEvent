const element = document.querySelector('.first-animate');

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.documentElement.scrollTop > 0.5) {
        console.log(document.documentElement.scrollTop);
        element.classList.add('animate__zoomIn');
    } else {
        console.log('hello');
    }
}
