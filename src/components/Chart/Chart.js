import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Chart.css';

function Chart() {
  const [state, setState] = useState();

  useEffect(() => {
    setState({
      series: [
        {
          name: 'Hoy',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'Ayer',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 225,
          type: 'area',
        },
        colors: ['#ec243c', '#6d7580'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2023-08-18T00:00:00.000Z',
            '2023-08-18T01:30:00.000Z',
            '2023-08-18T02:30:00.000Z',
            '2023-08-18T03:30:00.000Z',
            '2023-08-18T04:30:00.000Z',
            '2023-08-18T05:30:00.000Z',
            '2023-08-18T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart">
      {state ? (
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={state.options.chart.height}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default Chart;
