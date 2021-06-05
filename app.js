'use strict'

const switcher = document.querySelector('.btn');

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    //localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme')
    localStorage.setItem('toggleState', "true");
});

/*switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }

    console.log('current class name: ' + className);
});*/

if (localStorage.getItem('theme') === 'dark-theme') {
    document.body.classList.add('dark-theme');
    switcher.textContent = "Light Mode";
    // document.body.classList.toggle('dark-theme');


}

var tState = localStorage.getItem('toggleState');
if (tState == true) {
    document.body.classList.toggle('dark-theme');

}