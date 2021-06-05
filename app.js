'use strict'

const switcher = document.querySelector('.btn');

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('toggleState', "true");
});

if (localStorage.getItem('theme') === 'dark-theme') {
    document.body.classList.add('dark-theme');
    switcher.textContent = "Light Mode";
}

var tState = localStorage.getItem('toggleState');
if (tState == true) {
    document.body.classList.toggle('dark-theme');

}