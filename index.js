const element = document.querySelector('.first-animate');

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.documentElement.scrollTop > 10) {
        element.classList.add('animate__zoomIn');
    } else {
        console.log('hello');
    }
}
