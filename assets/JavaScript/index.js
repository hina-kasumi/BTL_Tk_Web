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
    const page = document.getElementsByClassName(current ? current : 'index')[0];
    if (page)
        page.classList.add('current-page');
}

// khởi tạo các thành phần cân thiết
async function init() {
    await initComponent('navbar', 'navbar');
    await initComponent('sidebar', 'sidebar');
    await initComponent('footer', 'footer');
    await currentPage();
    if (localStorage.getItem('account')) {
        await generateAccountInfor();
    } else await sign_in();
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
    const element = document.getElementById(
        localStorage.getItem('account') ? 'user-extend' : 'login-request'
    );
    if (element.classList.contains('active'))
        element.classList.remove('active');
    else {
        removeOtherActive();
        element.classList.add('active');
    }
}

// hệ thống đăng nhập
function Login(e) {
    if (localStorage.getItem('account')) {
        const infor = localStorage.getItem('account').split('-');
        const email = infor[0];
        const password = infor[1];
        console.log(e.target.email.value, email);
        console.log(e.target.password.value, password)
        if (e.target.email.value === email && e.target.password.value === password) {
            alert('Đăng nhập thành công');
        } else {
            e.preventDefault(); // Ngăn không cho form gửi đi nếu mật khẩu không hợp lệ
            alert('Sai mật khẩu hoặc email');
        }
    } else {
        e.preventDefault(); // Ngăn không cho form gửi đi nếu mật khẩu không hợp lệ
        alert('Sai mật khẩu hoặc email');
    }
}

function createNewAccount(e) {
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim(); // Lấy giá trị từ trường mật khẩu
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailChecker) {
        e.preventDefault(); // Ngăn không cho form gửi đi nếu mật khẩu không hợp lệ
        alert('hãy nhập email đúng định dạng');
    } else if (!hasLetter || !hasNumber || password.length < 8) {
        e.preventDefault(); // Ngăn không cho form gửi đi nếu mật khẩu không hợp lệ
        alert('mật khẩu phải có ít nhất 8 chữ số có cả số và chữ');
    } else {
        e.preventDefault(); // Ngăn không cho form gửi đi nếu mật khẩu không hợp lệ
        console.log(email, password);
        localStorage.setItem('account', email + '-' + password);
        switchLoginAndNewAccount('newAccountPanel', 'login-panel');
        alert('Thành công');
    }
}

function switchLoginAndNewAccount(curr, target) {
    document.getElementById(curr).style.display = 'none';
    document.getElementById(target).style.display = 'flex';
}

async function sign_in() {
    const response = await fetch('./login.html');
    const element = document.createElement('div');
    element.innerHTML = await response.text();
    await document.body.appendChild(element);
    removeOtherActive();
}

async function sign_out() {
    removeOtherActive();
    localStorage.removeItem('account');
    alert('Đăng xuất thành công');
}

function generateAccountInfor() {
    if (localStorage.getItem('account')) {
        const infor = localStorage.getItem('account');
        const email = infor.split('-')[0];
        document.querySelector('#user-extend h6').innerHTML = email;
        document.querySelector('#user-extend h5').innerHTML = email.split('@')[0];
    }
}

// end hệ thống đăng nhập

// help method
function removeOtherActive() {
    while (document.querySelector('.active'))
        document.querySelector('.active').classList.remove('active');
}

{
    function createID(id) {
        localStorage.setItem('productID', id);

    }

    const items = document.getElementsByClassName('items');
    if (items.length) {
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', () => {
                createID(i);
            })
        }
    }
}