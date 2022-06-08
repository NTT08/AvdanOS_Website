const menuBtn = document.getElementById('menu-btn')
const menuPopup = document.getElementById('menu-popup')

menuBtn.addEventListener('click', function() {
    if (menuPopup.classList.contains('show')) {
        menuPopup.classList.remove('show')
        menuPopup.classList.add('hide')
    }
    else if (menuPopup.classList.contains('hide')) {
        menuPopup.classList.remove('hide')
        menuPopup.classList.add('show')
    } 
    else {
        menuPopup.classList.add('show')
    }
})