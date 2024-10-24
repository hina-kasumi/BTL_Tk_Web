// tích all cho bảng
function tickAll() {
    const checkBox = document.querySelectorAll('input[type="checkbox"]');
    for (const checkBoxKey in checkBox) {
        checkBox[checkBoxKey].checked = checkBox[0].checked;
    }
}

//khi bị tràn thì sẽ hiển thị nhiều trang
let index = 0;

function overflowData(command) {
    const maxData = 5;
    const visible = 2;
    const data = document.querySelectorAll('table.table > tbody > tr');
    const pageNum = data.length / maxData;

    // thay đổi trang
    if (command === 'next')
        index = (index + 1 <= pageNum) ? index + 1 : index;
    else if (command === 'prev')
        index = (index - 1 >= 0) ? index - 1 : index;
    else if (typeof command === 'number')
        index = command;
    // console.log(index);

    // hiển thị dữ liệu cần hiện và ẩn dữ liệu cần ẩn
    for (let i = index * maxData - maxData; i <= (index + 1) * maxData + maxData; i++) {
        // console.log(i);
        if (i >= 0 && i < data.length) {
            if (i >= index * maxData && i < maxData * (index + 1))
                data[i].style.display = 'table-row';
            else
                data[i].style.display = 'none';
        }
    }

    //thay đổi số trang
    const page = document.getElementById('pages');
    page.innerHTML = '';

    for (let i = index - visible; i <= index + visible; i++) {
        if (i >= 0 && i <= pageNum) {
            let elem = document.createElement("span");
            elem.addEventListener('click', () => {
                console.log('num', i);
                overflowData(i);
            })
            if (i === index) {
                elem.classList.add('highlight');
            }
            elem.innerHTML = i + 1 + "";
            page.appendChild(elem);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    overflowData();
});


//generate data for table in HoaDon
for (let i = 0; i < 50; i++) {
    document.querySelector('tbody').innerHTML +=
        "<tr>\n" +
        "<td><input type=\"checkbox\"></td>\n" +
        "<td> " + i + "</td>\n" +
        "<td>28/9/2024</td>\n" +
        "<td>hiếu hiếu</td>\n" +
        "<td>đang giao hàng</td>\n" +
        "<td>100.000.000</td>\n" +
        "<td>90.000.000</td>\n" +
        "</tr>"
}