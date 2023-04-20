const element = document.querySelector('.first-animate');


element.addEventListener('mousemove', () => {
    console.log('hello');
    element.classList.add('animate__animated', 'animate__zoomIn'.replace(/\s+/g, '-'));
});