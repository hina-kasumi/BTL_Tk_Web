const id = localStorage.getItem('productID');
console.log(localStorage.getItem('productID'));

function back() {
    location.href = "SanPham.html";
}

function initImages() {
    const main_img = document.getElementsByClassName('main-img');
    if (main_img.length) {
        main_img[0].src = 'assets/img/Product_imgs/Product' + id + '/img_0.png';
        const list_img = document.querySelectorAll('.list-images > img');
        for (let i = 0; i < list_img.length; i++) {
            list_img[i].src = 'assets/img/Product_imgs/Product' + id + '/img_' + i + '.png';
        }
    }
}

function initInfoProduct() {
    const product = document.getElementById('info-side');
    if (product) {
        const product_info = 'product' + id;
        const info_saved = localStorage.getItem(product_info);
        const data = getData(id).then(data => {
            console.log(data);
            product.querySelector('h2').innerText = data["ProductName"];
            product.querySelector('h3 > span').innerText = data["ProductPrice"];
            product.querySelector('div').innerText = data["ProductDes"];
            product.querySelector('.da-ban').innerHTML = data["DaBan"];
            product.querySelector('.danh-gia').innerHTML = data["DanhGia"];
            if (info_saved) {
                const info = localStorage.getItem(product_info).split('/');
                if (info[0] !== "")
                    product.querySelector('h2').innerText = info[0];
                if (info[1] !== "")
                    product.querySelector('h3 > span').innerText = info[1];
                if (info[2] !== "")
                    product.querySelector('div').innerText = info[2];
            }
        });
    }
}

async function getData(id) {
    let x = await fetch("resources/ProductData.json");
    return JSON.parse(await x.text())[id];
}

initImages();
initInfoProduct();


{// tính năng chuyển ảnh
    let currentImg = 0;
    const list_img = document.querySelectorAll('.list-images > img');

    function displayImg(curr) {
        const main_img = document.getElementsByClassName('main-img')[0];
        main_img.src = 'assets/img/Product_imgs/Product' + id + '/img_' + curr + '.png';
        document.getElementsByClassName('current-img')[0].classList.remove('current-img');
        list_img[curr].classList.add('current-img');
    }

    function prevImg() {
        currentImg = currentImg - 1 < 0 ? 0 : currentImg - 1;
        displayImg(currentImg);
    }

    function nextImg() {
        currentImg = (currentImg + 1 >= list_img.length) ? list_img.length - 1 : currentImg + 1;
        displayImg(currentImg);
    }

    function chooseImg(key) {
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
}


// thay đổi thông tin sản phẩm
function changeInfo(e) {
    const nameProduct = e.target['name-product'].value;
    const priceProduct = e.target['price-product'].value;
    const desProduct = e.target['des-product'].value;
    const product_info = 'product' + id;
    localStorage.setItem(product_info, nameProduct + '/' + priceProduct + '/' + desProduct);
}

// hiển thị bảng chỉnh sửa thông tin sản phẩm
function display(idName) {
    const elem = document.getElementById(idName);
    if (elem.classList.contains('d-flex'))
        elem.classList.remove('d-flex');
    else
        elem.classList.add('d-flex');
}