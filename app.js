const chk = document.getElementById('chk');
import Splide from '@splidejs/splide';

new Splide('.splide').mount();

if (localStorage.getItem('theme')) {
    document.body.classList.toggle('dark-theme');
    chk.checked = true;
}

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    if (localStorage.getItem('theme')) {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', "dark-theme");
    }
});

var elms = document.getElementsByClassName('splide');
for (var i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i]).mount();
}

new Splide('#splide', {
    type: 'fade',
    rewind: true,
}).mount();

document.addEventListener('DOMContentLoaded', function() {
    new Splide('#image-slider', {
        'cover': true,
        'heightRatio': 0.5,
    }).mount();
});