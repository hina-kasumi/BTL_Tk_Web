//tạo components
async function initComponent(component, where) {
    const response = await fetch('./assets/components/' + component + '.html');
    document.getElementById(where).innerHTML = await response.text();
}

// đánh dầu đang ở trang nào
function currentPage() {
    const currentUrl = window.location.href.split('/'); //lấy tên miền
    const current = currentUrl[currentUrl.length - 1].split('.')[0]; // bỏ .html

    const curr = document.querySelector('.current-page');
    if (curr)
        curr.classList.remove('current-page');
    document.getElementsByClassName(current ? current : 'index')[0].classList.add('current-page');
}

// khởi tạo các thành phần cân thiết
async function init() {
    await initComponent('navbar', 'navbar');
    await initComponent('sidebar', 'sidebar');
    await initComponent('footer', 'footer');
    await currentPage();
}
window.addEventListener('DOMContentLoaded', init);


// dark mode feature
window.addEventListener('DOMContentLoaded', activeDarkMode);

function activeDarkMode() {
    const themeBtn = document.getElementById('theme-btn');
    if (localStorage.getItem('mode') === 'dark-mode') {
        const link = document.createElement('link');// Tạo một thẻ <link>
        // Thiết lập thuộc tính cho thẻ <link>
        link.rel = 'stylesheet';
        link.href = './assets/css/DarkMode/DarkMode.css';

        document.head.appendChild(link);// Thêm thẻ <link> vào phần <head>
        if (themeBtn) {
            themeBtn.innerHTML = 'Sáng';
        }
    } else if (themeBtn) {
        themeBtn.innerHTML = 'Tối';
    }
}

function removeDarkMode() {
    const lastChild = document.head.lastElementChild;
    lastChild.remove();

    // change btn
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn)
        themeBtn.innerHTML = 'Tối';
}

function darkMode() {
    if (localStorage.getItem('mode') !== 'dark-mode') {
        localStorage.setItem('mode', 'dark-mode');
        activeDarkMode();
    } else {
        localStorage.removeItem('mode');
        removeDarkMode();
    }
}
// end dark mode feature

// khi là điện loại sẽ hiện list để chọn
function activeCategory() {
    const element = document.querySelector('.category');
    if (element.classList.contains('active'))
        element.classList.remove('active');
    else {
        removeOtherActive();
        element.classList.add('active');
    }
}

// khi thay đổi màn hình thì sẽ bỏ hiển thị
function removeActiveCategory() {
    const element = document.querySelector('.category');
    if (element.classList.contains('active'))
        element.classList.remove('active');
}

// search btn when on small device
function exitSearchbar() {
    const searchbar_sm = document.getElementById('search-bar-sm');
    searchbar_sm.classList.add('d-none');
}
function openSearchbar() {
    removeOtherActive();
    const searchbar_sm = document.getElementById('search-bar-sm');
    searchbar_sm.classList.remove('d-none');
}

// khi màn hình thay đổi kích thức thì sẽ tắt bật vài thứ
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        removeActiveCategory();
    }
    if (window.innerWidth >= 576) {
        exitSearchbar();
    }
});

//đăng nhập và tài khoản
function activeAccount() {
    const element = document.getElementById('user-extend');
    if (element.classList.contains('active'))
        element.classList.remove('active');
    else {
        removeOtherActive();
        element.classList.add('active');
    }
}


function removeOtherActive () {
    while (document.querySelector('.active'))
        document.querySelector('.active').classList.remove('active');
}