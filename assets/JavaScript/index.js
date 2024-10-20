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
function initMain (filename){
    fetch('./' + filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log("Lỗi tải main", error));
}

function currentPage (activePage) {

}

function init(){
    initSidebar()
    initFooter();
}

init();