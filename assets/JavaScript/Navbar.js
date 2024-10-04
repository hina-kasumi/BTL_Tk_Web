function initPopup() {
    console.log('initPopup');
    let popup = document.getElementsByClassName('pop-up-element');
    for (let i = 0; i < popup.length; i++) {
        popup[i].addEventListener('click', function () {
            console.log('Phần tử được click là class thứ: ' + i);
            popup[i].nextElementSibling.style.display = (popup[i].nextElementSibling.style.display === 'none') ? 'flex' : 'none';
            // tắt tất cả các popup khác
            for (let j = 0; j < popup.length; j++) {
                if (j !== i) {
                    popup[j].nextElementSibling.style.display = 'none';
                }
            }
        });
    }
}

function initBack() {
    let back = document.getElementsByClassName('back-element');
    for (let i = 0; i < back.length; i++) {
        back[i].addEventListener('click', function () {
            console.log('Phần tử được click là class thứ: ' + i);
            back[i].parentElement.style.display = 'none';
        });
    }
}


function init() {
    // document.addEventListener("DOMContentLoaded", function () {
        console.log('Navbar.js loaded');
        initPopup();
        initBack();
    // });
}


init();