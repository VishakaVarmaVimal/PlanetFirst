import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import '../styles/chart.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [ '2000', '2001', '2002', '2003', '2004', '2005', '2006','2007','2008','2009','2010',
                          '2011','2012','2013','2014','2015','2016','2017','2018'],
                datasets: [{
                    label: 'Temperature',
                    data:[40, 54, 63, 62, 54, 68, 64, 66, 55, 66, 73,
                        61, 65, 69, 75, 90, 102, 92, 85
                    ],
                    backgroundColor:
                        'rgba(0,255,0,0.6)',
                }]
            }
        }
    }
    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0,900, 600);
        gradient.addColorStop(0.3, color);
        gradient.addColorStop(0.90, "rgba(255,69,0,0.6)");
        return gradient;
    };
    getChartData = canvas => {
        const data = this.state.chartData;
        if(data.datasets){
            let colors = ["rgba(255,255,0, 0.75)", "rgba(139,0,0, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
            });
        }
        return data;
    };
    render() {
        return(
            <div className="chart">
                <Line
                    data={this.getChartData}
                    options={{
                        title: {
                            display: true,
                            text:'Average Global Temperature Anomalies Over the Years',
                            fontSize: 25
                        },
                        legend:{
                            display: true,
                        }
                    }}
                    />
            </div>
        )
    }
}

export default Dashboard
