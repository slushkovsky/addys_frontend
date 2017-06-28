var ctx = document.getElementById('interest').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Авто", "Исскуство", "Еда", "Спорт"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [25,30,28,70,64]
        }]
    },

    // Configuration options go here
    options: {}
});/**
 * Created by Admin on 28.06.2017.
 */
