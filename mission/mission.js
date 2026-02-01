
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');


selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        body.style.backgroundColor = '#121212';
        body.style.color = '#ffffff';
        logo.src = 'images/logo-dark.png';
    } else {
        // code for changes to colors and logo
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#000000';
        logo.src = 'images/logo-light.png';
    }
}
