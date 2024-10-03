"use strict";
function initPopup() {
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

function tickAll() {
    let checkboxALL = document.getElementsByClassName('checkboxALL');// lấy tất cả các checkboxALL

    let parent = checkboxALL[0].parentNode.parentNode.parentNode;// lấy thẻ cha của checkboxALL

    // lặp qua tất cả các checkboxALL
    for (let i = 0; i < checkboxALL.length; i++) {
        checkboxALL[i].addEventListener('click', function () {
            let checkbox = parent.getElementsByTagName('input'); // lấy tất cả các checkbox trong thẻ cha của checkboxALL
            for (let j = 0; j < checkbox.length; j++) {
                checkbox[j].checked = checkboxALL[i].checked; // check hoặc uncheck tất cả các checkbox
            }
        });
    }
}

function init() {
    if (window.innerWidth < 640) {
        initPopup();
        initBack();
        tickAll();
    }
}

init();