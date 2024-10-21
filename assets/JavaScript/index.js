//tạo sidebar
async function initSidebar() {
    const response = await fetch('./assets/components/sidebar.html');
    document.getElementById('sidebar').innerHTML = await response.text();
}

//tạo footer
function initFooter() {
    fetch('./assets/components/footer.html')
        .then(response => response.text())
        .then(data => {
            console.log("1")
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error("Lỗi tải footer:", error));
    console.log("2");
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
    const currentUrl = window.location.href.split('/');
    const current = currentUrl[currentUrl.length - 1].split('.')[0];
    console.log(current);
    document.querySelector('.current-page').classList.remove('current-page');
    console.log(document.getElementsByClassName(current)[0])
   document.getElementsByClassName(current)[0].classList.add('current-page');
}

async function init() {
    await initSidebar();
    await initFooter();
    await currentPage();
}
window.addEventListener('DOMContentLoaded', init);


function tickAll() {
    const checkBox = document.querySelectorAll('input[type="checkbox"]');
    for (const checkBoxKey in checkBox) {
        checkBox[checkBoxKey].checked = checkBox[0].checked;
    }
}