//tạo components
async function initComponent(component, where) {
    const response = await fetch('./assets/components/' + component + '.html');
    document.getElementById(where).innerHTML = await response.text();
}

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
    const active = document.querySelector('.active');
    if (active)
        element.classList.remove('active');
    else
        element.classList.add('active');
}

// khi thay đổi màn hình thì sẽ bỏ hiển thị
function removeActiveCategory() {
    if (window.innerWidth >= 768) {
        const element = document.querySelector('.category');
        if (document.querySelector('.active'))
            element.classList.remove('active');
    }
}
window.addEventListener('resize', removeActiveCategory);


function tickAll() {
    const checkBox = document.querySelectorAll('input[type="checkbox"]');
    for (const checkBoxKey in checkBox) {
        checkBox[checkBoxKey].checked = checkBox[0].checked;
    }
}

