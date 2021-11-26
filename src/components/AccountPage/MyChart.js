import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "My Balance",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#db86b2",
      borderColor: "#ee8a2e",
      borderCapStyle: "butt",
      borderDashOffset: 0.0,
      borderJoinStyle: "#ee8a2e",
      pointBorderColor: "#ee8a2e",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#ee8a2e",
      pointHoverBorderColor: "#ee8a2e",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        5742.18, 11234.98, 18723.23, 28754.54, 30123.34, 34567.65, 41234.43,
        47832.58, 50986.27, 54324.54, 54234.54, 56789.98,
      ],
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
      },
      // beginAtZero: true, // this works
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function MyChart() {
  return <Line data={data} options={options} />;
}
