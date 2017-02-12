/**
 * Created by zak-linux on 2/11/17.
 */

var ctx = document.getElementById('myChart').getContext('2d');
var data = [
    {
        "department_title": "City Administrative Officer",
        "female_average_salary": "90744.41",
        "male_average_salary": "124848.33",
        "difference": "34103.92"
    },
    {
        "department_title": "Emergency Management",
        "female_average_salary": "86941.56",
        "male_average_salary": "117139.91",
        "difference": "30198.35"
    },
    {
        "department_title": "City Attorney",
        "female_average_salary": "103314.49",
        "male_average_salary": "129979.63",
        "difference": "26665.14"
    },
    {
        "department_title": "Disability",
        "female_average_salary": "63192.90",
        "male_average_salary": "88867.24",
        "difference": "25674.34"
    },
    {
        "department_title": "City Ethics Commission",
        "female_average_salary": "81526.62",
        "male_average_salary": "105230.15",
        "difference": "23703.53"
    },
    {
        "department_title": "Building and Safety",
        "female_average_salary": "61662.18",
        "male_average_salary": "83860.60",
        "difference": "22198.42"
    },
    {
        "department_title": "Boston Historical Monument Authority",
        "female_average_salary": "85669.92",
        "male_average_salary": "106016.60",
        "difference": "20346.68"
    },
    {
        "department_title": "Fire",
        "female_average_salary": "82341.80",
        "male_average_salary": "101936.52",
        "difference": "19594.72"
    },
    {
        "department_title": "Mayor",
        "female_average_salary": "52911.02",
        "male_average_salary": "71576.90",
        "difference": "18665.88"
    },
    {
        "department_title": "Pension",
        "female_average_salary": "76970.21",
        "male_average_salary": "94710.86",
        "difference": "17740.65"
    },
    {
        "department_title": "Public Works - Engineering",
        "female_average_salary": "77321.15",
        "male_average_salary": "93189.53",
        "difference": "15868.38"
    },
    {
        "department_title": "Cultural Affairs",
        "female_average_salary": "66799.93",
        "male_average_salary": "82040.79",
        "difference": "15240.86"
    },
    {
        "department_title": "Public Works - Board of Public Works",
        "female_average_salary": "66009.08",
        "male_average_salary": "80301.19",
        "difference": "14292.11"
    },
    {
        "department_title": "Public Works - Contract Administration",
        "female_average_salary": "70251.18",
        "male_average_salary": "84200.16",
        "difference": "13948.98"
    },
    {
        "department_title": "Housing and Community Investment Department",
        "female_average_salary": "67785.41",
        "male_average_salary": "81477.66",
        "difference": "13692.25"
    },
    {
        "department_title": "City Clerk",
        "female_average_salary": "75981.66",
        "male_average_salary": "88417.46",
        "difference": "12435.80"
    },
    {
        "department_title": "General Services",
        "female_average_salary": "58977.46",
        "male_average_salary": "69412.11",
        "difference": "10434.65"
    },
    {
        "department_title": "Council",
        "female_average_salary": "58039.12",
        "male_average_salary": "68022.15",
        "difference": "9983.03"
    },
    {
        "department_title": "City Planning",
        "female_average_salary": "73945.13",
        "male_average_salary": "83000.24",
        "difference": "9055.11"
    },
    {
        "department_title": "City Employees Retirement System",
        "female_average_salary": "67897.34",
        "male_average_salary": "76886.92",
        "difference": "8989.58"
    },
    {
        "department_title": "Personnel",
        "female_average_salary": "73962.19",
        "male_average_salary": "82685.80",
        "difference": "8723.61"
    },
    {
        "department_title": "Police",
        "female_average_salary": "85682.91",
        "male_average_salary": "94331.84",
        "difference": "8648.93"
    },
    {
        "department_title": "Harbor",
        "female_average_salary": "79440.85",
        "male_average_salary": "87762.86",
        "difference": "8322.01"
    },
    {
        "department_title": "Economic and Workforce Development Department",
        "female_average_salary": "77863.51",
        "male_average_salary": "85845.85",
        "difference": "7982.34"
    },
    {
        "department_title": "Transportation",
        "female_average_salary": "66830.71",
        "male_average_salary": "74167.64",
        "difference": "7336.93"
    },
    {
        "department_title": "Public Works - Street Services",
        "female_average_salary": "65000.44",
        "male_average_salary": "72315.08",
        "difference": "7314.64"
    },
    {
        "department_title": "Neighborhood Empowerment",
        "female_average_salary": "53325.65",
        "male_average_salary": "60260.35",
        "difference": "6934.70"
    },
    {
        "department_title": "Aging",
        "female_average_salary": "76367.29",
        "male_average_salary": "83158.60",
        "difference": "6791.31"
    },
    {
        "department_title": "Airports",
        "female_average_salary": "67459.93",
        "male_average_salary": "73985.09",
        "difference": "6525.16"
    },
    {
        "department_title": "Animal Services",
        "female_average_salary": "56817.62",
        "male_average_salary": "62188.27",
        "difference": "5370.65"
    },
    {
        "department_title": "Information Technology Agency",
        "female_average_salary": "88990.26",
        "male_average_salary": "94327.40",
        "difference": "5337.14"
    },
    {
        "department_title": "Public Works - Sanitation",
        "female_average_salary": "68176.61",
        "male_average_salary": "73246.58",
        "difference": "5069.97"
    },
    {
        "department_title": "Controller",
        "female_average_salary": "83167.15",
        "male_average_salary": "87588.92",
        "difference": "4421.77"
    },
    {
        "department_title": "Office of Finance",
        "female_average_salary": "72029.47",
        "male_average_salary": "74160.99",
        "difference": "2131.52"
    },
    {
        "department_title": "Zoo",
        "female_average_salary": "60972.44",
        "male_average_salary": "61620.50",
        "difference": "648.06"
    },
    {
        "department_title": "Recreation and Parks",
        "female_average_salary": "64287.85",
        "male_average_salary": "63486.21",
        "difference": "-801.64"
    },
    {
        "department_title": "Library",
        "female_average_salary": "61997.90",
        "male_average_salary": "59777.57",
        "difference": "-2220.33"
    },
    {
        "department_title": "Public Works - Street Lighting",
        "female_average_salary": "79240.44",
        "male_average_salary": "76354.57",
        "difference": "-2885.87"
    }
];


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: $.map(data, function(val){
            return val.department_title;
        }),
        datasets: [{
            label: 'Men',
            data: $.map(data,function(val){
                return val.male_average_salary;
            }),
            backgroundColor: "rgba(153,255,51,0.4)"
        }, {
            label: 'Women',
            data: $.map(data, function(val){
                return val.female_average_salary;
            }),
            backgroundColor: "rgba(255,153,0,0.4)"
        }]
    }
});
/*var CHART = document.getElementById('myChart');

var myChart = new Chart(CHART, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
**/
