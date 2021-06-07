'use strict'

const switcher = document.querySelector('.btn');

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', "dark-theme");
});

if (localStorage.getItem('theme') === 'dark-theme') {
    document.body.classList.toggle('dark-theme');
}