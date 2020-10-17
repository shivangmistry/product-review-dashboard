import React from "react";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./sales-chart.css";

function SalesChart() {
  const retailSales = useSelector((state) =>
    state.sales.map((d) => [d.weekEnding, d.retailSales])
  );

  const wholesaleSales = useSelector((state) =>
    state.sales.map((d) => [d.weekEnding, d.wholesaleSales])
  );

  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Retail Sales",
      align: "left",
    },
    xAxis: {
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Retail Sales",
        data: retailSales,
        tooltip: {
          valuePrefix: "$",
        },
      },
      {
        name: "Wholesale Sales",
        data: wholesaleSales,
        tooltip: {
          valuePrefix: "$",
        },
      },
    ],
  };

  return (
    <div
      className="container background-white sales-chart"
      style={{ padding: 10 }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        className="sales-chart"
      />
    </div>
  );
}

export default SalesChart;
