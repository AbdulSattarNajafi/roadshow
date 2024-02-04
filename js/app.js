'use strict';
// ============  Header Menu
const menuBtn = document.getElementById('nav-toggler-btn');
const menuContent = document.getElementById('header-menu');
const navLinks = document.querySelectorAll('.header__menu-link');

menuBtn.addEventListener('click', toggleMenu);
navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

function toggleMenu() {
    menuBtn.classList.toggle('open');
    const isActive = menuBtn.classList.contains('open');

    if (isActive) {
        menuContent.style.maxHeight = menuContent.scrollHeight + 'px';
    } else {
        menuContent.style.maxHeight = null;
    }
}
function closeMenu() {
    menuBtn.classList.remove('open');
    menuContent.style.maxHeight = null;
}

// Show & Hide Button Scroll to Top
const btnUp = document.querySelector('.btn-up');
window.onscroll = function () {
    const windowHeight = window.innerHeight;

    if (window.scrollY > 2 * windowHeight) {
        btnUp.classList.add('show');
    } else {
        btnUp.classList.remove('show');
    }
};

// ==================== Footer Year
const footerYear = document.getElementById('full-year');
footerYear.textContent = new Date().getFullYear();

// ===================== Timer
const items = document.querySelectorAll('.timer__item-time');

//Setting Date
const now = new Date();

// ** Date Format should be sring
// new Date('2024-08-31 23:59:00');
const futureDate = new Date('2024-03-04 01:59:00');

//const futureDate
const oneHour = 60 * 60 * 1000;

//Future Time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;
    let day = Math.floor(t / oneDay);
    let hour = Math.floor((t % oneDay) / oneHour);
    let minute = Math.floor((t % oneHour) / oneMinute);
    let second = Math.floor((t % oneMinute) / oneSecond);

    const val = [day, hour, minute, second];
    // if value is less than 10 then throw 0 before the value
    function format(item) {
        if (item < 10) {
            return `0${item}`;
        } else {
            return item;
        }
    }

    //Displaying in the DOM
    items.forEach(function (item, index) {
        if (t > 1) {
            item.innerHTML = format(val[index]);
        } else {
            item.innerHTML = '00';
        }
    });

    if (t < 1) {
        clearInterval(countdown);
    }
}

//Countdown
let countdown = setInterval(getRemainingTime, 1000);
//invoking the function after interval
getRemainingTime();
