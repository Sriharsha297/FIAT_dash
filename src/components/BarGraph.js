import React from "react";
import { Bar } from "react-chartjs-2";

class BarGraph extends React.Component {
    constructor() {
        super();
        this.state = {
            labels: ['9:00am-10:00am', '10:00am-11:00am', '11:00am-12:00am', '12:00am-13:00pm', '13:00pm-14:00pm', '14:00pm-15:00pm', '15:00pm-16:00pm'],
            datasets: [
                {
                    label: 'Cars Entered in Sales yard',
                    backgroundColor:'#FFA500',
                    // borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [2,20,40,60,80,100]
                },
                {
                    label: 'Cars Waiting for inspection',
                    backgroundColor: '#4B0082',
                   // borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [10,30,50,70,90,110]
                },
                {
                    label: 'Cars Inspected',
                    backgroundColor: '#FFFF66',
                    //borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [20,40,60,80,100,120]
                }
                ,
                {
                    label: 'Cars Invoiced',
                    backgroundColor: '#00FF00',
                   // borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [30,50,70,90,110,130]
                },
                {
                    label: 'Cars Delevered',
                    backgroundColor: '#00FFFF',
                    //borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    // hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [50,70,90,110,50,154]
                }
               
            ]

        }
    }
    render() {
        return (
            <div>
                <h2>INWARD INSPECTION CHART</h2>
                <Bar
                    data={this.state}
                    width={200}
                    height={200}
                 
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }

}

export default BarGraph;