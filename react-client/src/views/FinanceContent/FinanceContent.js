import React from 'react';
import {Chart} from 'chart.js';


class FinanceContent extends React.Component {
    constructor (props) {
        super(props);
        this.chartRef = React.createRef();
        this.createFinanceChart = this.createFinanceChart.bind(this);
    }
    componentDidUpdate () {
        this.createFinanceChart();
    }
    createFinanceChart () {
        if (this.props.data) {
            const financeChartRef = this.chartRef.current.getContext("2d");
            this.financeChart = new Chart(financeChartRef, {
                type: 'line',
                data: {
                    labels: this.props.data.Teams,
                    datasets: [
                        {
                            label: 'Points scored',
                            data: this.props.data.PointsScored
                        }
                    ]
                }
            });
        }
    }
    render () {
        return (
            <div id='finance-content'>
                <canvas ref={this.chartRef}></canvas>
            </div>
        ); 
    }
}

export default FinanceContent;