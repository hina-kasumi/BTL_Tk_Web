//tạo sidebar
async function initSidebar() {
    const response = await fetch('./assets/components/sidebar.html');
    document.getElementById('sidebar').innerHTML = await response.text();
}

//tạo footer
async function initFooter() {
    const response = await fetch('./assets/components/footer.html');
    document.getElementById('footer').innerHTML = await response.text();
}

//tạo main content
function initMain(filename) {
    fetch('./' + filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log("Lỗi tải main", error));
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
    await initSidebar();
    await initFooter();
    await currentPage();
}
window.addEventListener('DOMContentLoaded', init);


// dark mode feature
window.addEventListener('DOMContentLoaded', activeDarkMode);
function activeDarkMode() {
    const themeBtn = document.getElementById('theme-btn');
    document.getElementById('light-btn')
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


function tickAll() {
    const checkBox = document.querySelectorAll('input[type="checkbox"]');
    for (const checkBoxKey in checkBox) {
        checkBox[checkBoxKey].checked = checkBox[0].checked;
    }
}