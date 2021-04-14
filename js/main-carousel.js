const btnRight = document.querySelector('.btn-arrow.-right');
const btnLeft = document.querySelector('.btn-arrow.-left');
const elements = document.querySelector('.elements');
var pixels = 10;
btnRight.addEventListener('click' , function() {
    pixels = pixels + 60;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click' , function() {
    pixels = pixels - 70;
    elements.style = `transform: translateX(${pixels}px)`;
});