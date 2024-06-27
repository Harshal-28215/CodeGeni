import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';
import '../styles/form.css'

const Form = () => {
    const ctxCombined = useRef(null)


    useEffect(() => {
      
        const data = {
            labels: ['March 1', 'March 2', 'March 3', 'March 4', 'March 5'], // Replaced with time and date labels
            barData: [30, 40, 20, 50, 35],
            lineData: [50, 30, 40, 25, 45],
            doughnutData: [30, 40, 20],
            radarData: [20, 35, 40, 50, 30],
            colors: {
              bar: '#007bff',
              line: '#28a745',
              doughnut: ['#dc3545', '#007bff', '#ffc107'],
              radar: 'rgba(220, 53, 69, 0.2)'
            }
          };
        
          // Create the combined chart
        //   const ctxCombined = document.getElementById('combinedChart').getContext('2d');
          console.log(ctxCombined.current);
          const ctx = ctxCombined.current.getContext('2d');
          const combinedChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: data.labels,
              datasets: [{
                label: 'Bar Chart',
                data: data.barData,
                backgroundColor: data.colors.bar,
                borderWidth: 1
              }, {
                label: 'Line Chart',
                data: data.lineData,
                borderColor: data.colors.line,
                borderWidth: 2,
                fill: false,
                type: 'line'
              }]
            },
            options: {
              animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        
          // Add doughnut chart
          const combinedData = {
            labels: ['Category 1', 'Category 2', 'Category 3'],
            datasets: [{
              label: 'Doughnut Chart',
              data: data.doughnutData,
              backgroundColor: data.colors.doughnut
            }]
          };
        
          combinedChart.data.datasets.push(combinedData.datasets[0]);
          combinedChart.update();
        
          // Add radar chart
          const radarDataset = {
            label: 'Radar Chart',
            data: data.radarData,
            backgroundColor: data.colors.radar,
            borderColor: data.colors.bar,
            borderWidth: 2
          };
        
          combinedChart.data.datasets.push(radarDataset);
          combinedChart.update()

    }, [])
    
    

    return (
        <div class="containerr">
            <div class="chart-section">
                <div class="chart-title">User Usage</div>
                <canvas id="combinedChart" ref={ctxCombined}></canvas>
            </div>
        </div>
    )
}

export default Form
