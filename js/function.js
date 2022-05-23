/*jshint esversion: 6 */

const DETAILS = document.querySelector('#details');
const HEADER = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 100) {
        HEADER.classList.add('fixed');
    } else {
        HEADER.classList.remove('fixed');
    }

    if (window.pageYOffset >= 400) {
        DETAILS.classList.add('fixed');
    } else {
        DETAILS.classList.remove('fixed');
    }
});


const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.flex-card-container');

IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
    const elm = document.querySelector(`.${ACTIVECLASS}`)
    if (elm) {
        elm.classList.remove(ACTIVECLASS);
    }
}

function addClass($event) {
    $event.stopPropagation();
    removeActiveClass();
    const target = $event.currentTarget;
    target.classList.add(ACTIVECLASS);
}

IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
})