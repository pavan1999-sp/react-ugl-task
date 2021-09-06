import react from 'react'
import './Highcharts.css'
import highCarts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function OurChart(ch: any) {
    const options = {
        title: {
            text: 'Utilisation Hours Vs Count',
            align: 'left',
            style: {
                color: 'white'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: true
        },
        xAxis: [{
            categories: ['Dec1', 'Dec2', 'Dec3', 'Dec4', 'Dec5', 'Dec6', 'Dec7', 'Dec8', 'Dec9', 'Dec10', 'Dec11', 'Dec12', 'Dec13', 'Dec14', 'Dec15', 'Dec16', 'Dec17', 'Dec18', 'Dec19', 'Dec20'],
            labels: {
                style: {
                    color: 'white',
                    fontSize:'9px'

                },
                rotation: 0
            },


        }],
        yAxis: [

            {
                max: 21,
                min: 12,
                gridLineWidth: 0,
                lineWidth: 1,
                title: {
                    text: null
                }
            },
            {
                linkedTo: 0,
                opposite: true,
                gridLineWidth: 0,
                lineWidth: 1,
                title: {
                    text: null
                }
            }
        ],
        plotOptions: {
            series: {
                pointPadding: 2,
                groupPadding: 0.4,
            }
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: 'Top',
            x: 35,
            y: -6,
            itemStyle: {
                color: 'white'

            }
        },
        series: [{
            pointWidth: 8,
            color: "darkcyan",
            //   pointPadding: 0,
            name: 'utilization',

            data: ch.chart.uz,

        }, {
            name: 'Wheel count',
            color: "#37ebe2",
            data: ch.chart.wc
        },]
        ,
        chart: {
            type: 'column',
            backgroundColor: '#26262d'
        }
    }

    return (
<div>



      <HighchartsReact
                highcharts={highCarts}
                options={options}
            />

    
</div>


        // <div className="chart">
        //     <HighchartsReact
        //         highcharts={highCarts}
        //         options={options}
        //     />
        // </div>
    )
}

export default OurChart;
