"use strict";

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

//tạo main content
function initMain(filename) {
    fetch('./' + filename + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main').innerHTML = data;
        })
        .catch(error => console.log("Lỗi tải main", error));
    currentPage(filename);
}

function currentPage(activePage) {
    const pages = document.getElementsByClassName('current-page');
    const currentPage = document.getElementById(activePage);
    // console.log(pages.length);
    if (pages.length)
        pages[0].classList.remove('current-page');
    // console.log(currentPage);
    if (currentPage)
        currentPage.classList.add('current-page');
    console.log(activePage);


}

function init() {
    initSidebar()
    initFooter();
    initMain('Main');
}

init();