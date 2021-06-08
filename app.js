const chk = document.getElementById('chk');

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