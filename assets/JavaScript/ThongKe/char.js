const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'], // Các tháng
        datasets: [{
            label: 'Số lượng đơn hàng',
            data: [120, 90, 140, 110, 180, 200, 230, 190, 170, 220, 250], 
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderColor: 'rgba(54, 162, 235, 1)', 
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Số lượng đơn hàng bán ra các tháng trong năm'
            }
        }
    }
});