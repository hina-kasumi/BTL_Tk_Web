"use strict";

//tạo sự kiện click cho checkboxALL
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


//tạo header
function initHeader() {
    fetch('./assets/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            const script = document.createElement("script"); // tạo thẻ script cho navbar
            script.src = "./assets/JavaScript/Navbar.js"; // đường dẫn đến file Navbar.js
            document.body.appendChild(script); // thêm script vào body
        })
        .catch(error => console.error("Lỗi tải navbar:", error));
}

//tạo footer
function initFooter() {
    fetch('./assets/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error("Lỗi tải footer:", error));
}

//tạo sidebar
function initSidebar() {
    fetch('./assets/components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
        })
        .catch(error => console.error("Lỗi tải sidebar:", error));
}

//khởi tạo
function init() {
    console.log('index.js loaded');
    initHeader();
    tickAll();
    initFooter();
    initSidebar();
}

//sự kiện DOMContentLoaded xảy ra khi toàn bộ HTML đã được load xong
document.addEventListener("DOMContentLoaded", function () {
    init();
});
