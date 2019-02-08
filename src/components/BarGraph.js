import React from "react";
import { Bar } from "react-chartjs-2";

class BarGraph extends React.Component {
    constructor() {
        super();
        this.state = {
            labels: ['9:00am-10:00am', '10:00am-11:00am', '11:00am-12:00am', '12:00am-13:00pm', '13:00pm-14:00pm', '14:00pm-15:00pm', '15:00pm-16:00pm'],
            datasets: [
                {
                    label: 'Rejected Cars',
                    type:'line',
                    data: [0, 1, 0, 0, 1, 0, 2,1,0],
                    fill: false,
                    borderColor: '#000',
                    backgroundColor: '#000',
                    pointBorderColor: '#000',
                    pointBackgroundColor: '#000',
                    pointHoverBackgroundColor: '#000',
                    pointHoverBorderColor: '#000',
                    yAxisID: 'y-axis-2'
                },
                {
                    label: 'Avg Inward inspection time',
                    type:'line',
                    data: [5.5,5,4.5,4.2,4.2,5.8,5.2,4.3,4.8],
                    fill: false,
                    borderColor: '#0b53bf',
                    backgroundColor: '#0b53bf',
                    pointBorderColor: '#0b53bf',
                    pointBackgroundColor: '#0b53bf',
                    pointHoverBackgroundColor: '#0b53bf',
                    pointHoverBorderColor: '#0b53bf',
                    yAxisID: 'y-axis-2'
                },
                {
                    label: 'Cars Inspected',
                    type:'line',
                    data: [15,28,32,34,34,29,30,33,32],
                    fill: false,
                    borderColor: '#abcdef',
                    backgroundColor: '#abcdef',
                    pointBorderColor: '#abcdef',
                    pointBackgroundColor: '#abcdef',
                    pointHoverBackgroundColor: '#abcdef',
                    pointHoverBorderColor: '#abcdef',
                    yAxisID: 'y-axis-2'
                },
                {
                    label: 'Cars Entered sales yard',
                    type:'line',
                    data: [24,32,16,36,42,32,24,34,35],
                    fill: false,
                    borderColor: '#f89796',
                    backgroundColor: '#f89796',
                    pointBorderColor: '#f89796',
                    pointBackgroundColor: '#f89796',
                    pointHoverBackgroundColor: '#f89796',
                    pointHoverBorderColor: '#f89796',
                    yAxisID: 'y-axis-2'
                },
                {
                    label: 'Cars Entered in Sales yard',
                    backgroundColor: '#FFA500',
                    // borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [29, 20, 40, 60, 80, 100],
                    yAxisID:'y-axix-1'

                },
                {
                    label: 'Cars Waiting for inspection',
                    backgroundColor: '#4B0082',
                    // borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [10, 30, 50, 70, 90, 110]
                },
                {
                    label: 'Cars Inspected',
                    backgroundColor: '#FFFF66',
                    //borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [20, 40, 60, 80, 100, 120]
                }
                ,
                {
                    label: 'Cars Invoiced',
                    backgroundColor: '#00FF00',
                    // borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [30, 50, 70, 90, 110, 130]
                },
                {
                    label: 'Cars Delevered',
                    backgroundColor: '#00FFFF',
                    //borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [50, 70, 90, 110, 50, 154]
                }
            ]

        }
        this.plugins = [{
            afterDraw: (chartInstance, easing) => {
                const ctx = chartInstance.chart.ctx;
                ctx.fillText("This text drawn by a plugin", 100, 100);
            }
        }];
    }
   
    render() {
        return (
            <div className="container-fluid">
                <span className="text-center">
                    <h2>INWARD INSPECTION CHART</h2>
                </span>
                <hr />
                <Bar
                    data={this.state}

                    // width={900}
                    height={400}
                    plugin={this.plugins}

                    options={{
                        maintainAspectRatio: false,
                        legend:{
                            position:'left',
                        },
                        
                        //responsive:false,
                        scales: {
                            xAxes: [{
                                stacked: true
                            }],
                            yAxes: [{
                                type:'linear',
                                id:'y-axix-1',
                                stacked: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Number of Cars',
                                    fontSize: 20
                                }
                            },{
                                type: 'linear',
                                display: true,
                                position: 'right',
                                id: 'y-axis-2',
                                gridLines: {
                                  display: false
                                },
                                labels: {
                                  show: true
                                }
                            }],
                        }
                    }}
                />
               
            </div>
        )
    }

}

export default BarGraph;