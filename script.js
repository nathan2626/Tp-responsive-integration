const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
const pictoBurger = document.querySelector('.burger-picto');
const active = document.querySelector('.active');

burger.addEventListener('click', e => { //bonus
    e.preventDefault() //recherge pas la page
    menu.classList.toggle('active');
});

if (typeof active !== 'undefined') {
    pictoBurger.style.paddingBottom = "2px" //for hover (color orange)
}