'use client'
import { palette } from '@/style/color';
import { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {

  constructor(props) {
    super(props);
    const category = ["S", "M", "T", "W", "T", "F", "S"];
    const data =[30, 55, 45, 60, 66, 30, 45];
    const color = data.map(value => value <= 50 ? palette.deepPurple[100]: palette.deepPurple[300] ) 

    this.state = {
      
      options: {
        colors:color,
        plotOptions:{
          bar: {
            columnWidth: '90%',
            distributed: true}
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false,
          
        },
        
        xaxis: {
          categories: category,
          grid:{
            show:false
          }
          
        },
        yaxis:{
          show:false
        },
        grid:{
        yaxis: {
          lines:{
            show:false
          }
        }
      }
      },

      series: [
        {
          name: "series-1",
          data: data,
 
        }
      ],

    };
  }

  render() {
    return (
      <>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              data={this.state.data}
              categories={this.state.category}

            />
       
     </>
  
    );
  }
}

export default ApexChart;