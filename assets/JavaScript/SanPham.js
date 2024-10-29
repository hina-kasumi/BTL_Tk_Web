// const id = localStorage.getItem('productID');

function initAllProducts() {
    const items = document.getElementsByClassName('items');
    console.log(items.length);
    for (let i = 0; i < items.length; i++) {
        const imgs = items[i].getElementsByClassName('items__img');
        const product_info = 'product' + i;
        const info_saved = localStorage.getItem(product_info);
        console.log(info_saved);
        if (info_saved) {
            const info = localStorage.getItem(product_info).split('/');
            if (info[0] !== "")
                items[i].querySelector('.items__head').innerText = info[0];
            if (info[1] !== "")
                items[i].querySelector('.items__price > span').innerText = info[1];
        }
        try {
            imgs[0].src = 'assets/img/Product_imgs/Product' + i + '/img_0.png';

        } catch (e) {
            console.log('bug here');
        }
    }
}

initAllProducts();