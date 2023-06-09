import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export function ChartDiv(props) {
  let chartTitle = props.chartTitle;
  let options = {
    xAxis: {
      categories: props.xvalues,
    },
    series: [{data: props.yvalues}],
    title: {
      text: chartTitle,
    },
    events: {
      load() {
        setTimeout(this.reflow.bind(this), 0);
      },
    },
    chart: {
      zoomType: "x,y",
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      allowChartUpdate={true}
      immutable={true}
    />
  );
}
