// const id = localStorage.getItem('productID');

async function initAllProducts() {
    const items = document.getElementsByClassName('items');
    console.log(items.length);
    for (let i = 0; i < items.length; i++) {
        const imgs = items[i].getElementsByClassName('items__img');
        const product_info = 'product' + i;
        const info_saved = localStorage.getItem(product_info);
        if (info_saved !== "//" && info_saved) {
            const info = localStorage.getItem(product_info).split('/');
            if (info[0] !== "")
                items[i].querySelector('.items__head').innerText = info[0];
            if (info[1] !== "")
                items[i].querySelector('.items__price > span').innerText = info[1];
        } else {
            const data = getData(i);
            data.then(data => {
                items[i].querySelector('.items__head').innerText = data["ProductName"];
                items[i].querySelector('.items__price > span').innerText = data["ProductPrice"];
            });
        }
        try {
            imgs[0].src = 'assets/img/Product_imgs/Product' + i + '/img_0.png';

        } catch (e) {
            console.log('bug here');
        }
    }
}

async function getData(id) {
    let x = await fetch("resources/ProductData.json");
    return JSON.parse(await x.text())[id];
}

initAllProducts().then(() => {console.log('Khởi tạo sản phẩm thành công');})
    .catch((error) => {console.error('Lỗi khi khởi tạo sản phẩm:', error);});