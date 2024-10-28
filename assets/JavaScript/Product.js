function back() {
    history.back();
}

let currentImg = 0;
const list_img = document.querySelectorAll('.list-images > img');

function displayImg(curr) {
    const main_img = document.getElementsByClassName('main-img')[0];
    main_img.src = 'assets/img/Product_imgs/img_' + curr + '.png';
    document.getElementsByClassName('current-img')[0].classList.remove('current-img');
    list_img[curr].classList.add('current-img');
}

function prevImg() {
    currentImg = currentImg - 1 < 0? 0:currentImg - 1;
    displayImg(currentImg);
}

function nextImg() {
    currentImg = (currentImg + 1 >= list_img.length) ? list_img.length - 1 : currentImg + 1;
    displayImg(currentImg);
}

function chooseImg(key) {
    // document.getElementsByClassName('current-img')[0].classList.remove('current-img');
    // list_img[key].classList.add('current-img');
    displayImg(key);
    currentImg = key;
}

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < list_img.length; i++) {
        list_img[i].addEventListener('click', () => {
            chooseImg(i);
        });
    }
})