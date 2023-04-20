const element = document.querySelector('.first-animate');

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.documentElement.scrollTop > 10) {
        element.classList.add('animate__animated', 'animate__zoomIn'.replace(/\s+/g, '-'));
    } else {
        console.log('hello');
    }
}
