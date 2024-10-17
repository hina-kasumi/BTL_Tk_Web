//tạo sidebar
function initSidebar() {
    fetch('./assets/components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
        })
        .catch(error => console.error("Lỗi tải sidebar:", error));
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

function init(){
    initSidebar()
    initFooter();
}

init();