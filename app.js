const h1s = document.querySelectorAll('h1');
const h2s = document.querySelectorAll('h2');
const h3s = document.querySelectorAll('h3');
const theme = document.querySelector('.light-dark-mode');
const lightMode = document.querySelector('#light-mode');
const darkMode = document.querySelector('#dark-mode');
const container = document.querySelector('.container');
const aLinks = document.querySelectorAll('a');
const aActive = document.querySelector('#a-active');
const small = document.querySelectorAll('small');
const date = document.querySelector('#date-month-year');
const tds = document.querySelectorAll('td');
const time = document.querySelectorAll('#time');
const monitoringLeftContent = document.querySelectorAll('.left-content');
const spanTeam = document.querySelectorAll('.span-team');
const percent = document.querySelectorAll('#number');
const p = document.querySelectorAll('#colon');
const menu = document.querySelector('.menu');
const grid1 = document.querySelector('.grid-1');
const grid4 = document.querySelector('.grid-4');
const closeBtnGrid4 = document.querySelector('.close-grid-4');
const menuGrid2 = document.querySelector('.menu-grid-2');
const arrowback = document.querySelector('.arrow-back')
console.log(menu, grid4, closeBtnGrid4, menuGrid2, grid1, arrowback);

theme.addEventListener('click', function () {

    document.body.classList.toggle('dark-theme');

    container.classList.toggle('dark-theme');

    lightMode.classList.toggle('active');
    darkMode.classList.toggle('active');

    h1s.forEach(function (el) {
        el.classList.toggle('white');
    })

    h2s.forEach(function (el) {
        el.classList.toggle('white');
    })

    h3s.forEach(function (el) {
        el.classList.toggle('white');
    })

    aLinks.forEach(function (el) {
        el.classList.toggle('white');
    })



    aActive.classList.toggle('active-2');

    small.forEach(function (el) {
        el.classList.toggle('white');
    })

    tds.forEach(function (el) {
        el.classList.toggle('white');
    })

    time.forEach(function (el) {
        el.classList.toggle('white');
    })

    monitoringLeftContent.forEach(function (el) {
        el.classList.toggle('left-content-2');
    })

    spanTeam.forEach(function (el) {
        el.classList.toggle('white');
    })

    percent.forEach(function (el) {
        el.classList.toggle('white');
    })

    p.forEach(function (el) {
        el.classList.toggle('white');
    })

    menu.classList.toggle('white');

    menuGrid2.classList.toggle('white');

    closeBtnGrid4.classList.toggle('white');

    arrowback.classList.toggle('white');

    grid4.classList.toggle('dark-theme');

    grid1.classList.toggle('dark-theme');
})

menu.addEventListener('click', function () {
    grid4.style.display = 'block';
    console.log('it work')
})

closeBtnGrid4.addEventListener('click', function () {
    grid4.style.display = 'none';
    console.log('it work')
})

menuGrid2.addEventListener('click', function () {
    grid1.style.display = 'block';
    console.log('it work')
})

arrowback.addEventListener('click', function () {
    grid1.style.display = 'none';
    console.log('it work')
})

