/**
 * Created by Admin on 28.06.2017.
 */
/**
 * Created by Admin on 28.06.2017.
 */
var ctx = document.getElementById('ageam').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{

            label: ["Мужчины","Женщины"],
            backgroundColor: ['rgb(255, 99, 132)','rgb(255, 10, 132)','rgb(255, 99, 132)','rgb(255, 10, 132)'],
            borderColor: ['rgb(255, 80, 132)','rgb(255, 80, 132)','rgb(255, 80, 132)','rgb(255, 80, 132)'],
            data: [80, 60,80,90]

        }],

        labels: ['0-15', '15-25','25-40','40-60'],
        position: 'right'



        // These labels appear in the legend and in the tooltips when hovering different arcs

    }
});