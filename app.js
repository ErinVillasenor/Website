'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme')

    var className = document.body.className;
    var icon = document.getElementById('icon');
    if (className == "light-theme") {
        this.textContent = "Dark Mode";
        //   this.icon.classList = ('fas fa-moon');
        this.icon.classList.toggle('fas fa-moon');
        this.icon.classList.toggle('fas fa-sun');

    } else {
        this.textContent = "Light Mode";
        //   this.icon.classList = ('fas fa-sun');
        this.icon.classList.toggle('fas fa-sun');
        this.icon.classList.toggle('fas fa-moon');


    }

    console.log('current class name: ' + className);
});

if (localStorage.getItem('theme') === 'dark-theme') {
    document.body.classList.add('dark-theme');
    switcher.textContent = "Light Mode";
    switcher.icon.classList.toggle('fas fa-sun');
    switcher.icon.classList.toggle('fas fa-moon');

}