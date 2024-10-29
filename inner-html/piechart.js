
const ctxPie = document.getElementById('myPieChart').getContext('2d');


const myPieChart = new Chart(ctxPie, {
    type: 'pie', 
    data: {
        labels: ['Hủy đơn', 'Đã thanh toán', 'Đã xác nhận', 'Chờ thanh toán'], 
        datasets: [{
            label: 'Trạng thái đơn hàng',
            data: [15, 40, 30, 15], 
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(255, 206, 86, 0.6)', 
                'rgba(75, 192, 192, 0.6)'  
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Tình trạng đơn hàng' 
            }
        }
    }
});
