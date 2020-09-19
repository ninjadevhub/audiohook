import React from 'react';
import './style.scss';
import Chart from 'react-apexcharts';
import { ILineChartOption } from '../../../models';
import { abbreviateNumber, starChartNodeFormatter } from '../lib/utils';

export interface IBaseProps {
  data: any;
  width?: number;
  option: ILineChartOption;
}

const LineChart: React.FC<IBaseProps> = ({ data, width, option }) => {
  const lineChartOption = {
    series: [
      {
        data: data,
      },
    ],
    options: {
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: [option.color],
        width: 2,
        dashArray: 0,
      },
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 245,
        zoom: {
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: 'hollow',
        colors: [option.color],
      },

      xaxis: {
        type: 'datetime',
        min: new Date('01 Feb 2020').getTime(),
        tickAmount: 5,
        labels: {
          style: {
            colors: ['#000000'],
            fontSize: '11px',
            fontFamily: 'Hero-Regular',
            cssClass: 'line-chart-xaxis-label',
          },
        },
        axisBorder: {
          show: false,
          borderType: 'dotted',
          color: 'red',
          height: 1,
          width: '100%',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
          borderType: 'dotted',
          color: 'red',
          height: 5,
          offsetX: 0,
          offsetY: 0,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: true,
        tickAmount: 5,
        labels: {
          show: true,
          align: 'right',
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: ['#000000'],
            fontSize: '12px',
            fontFamily: 'Hero-Regular',
            fontWeight: 400,
            cssClass: 'line-chart-yaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: (value) => {
            return abbreviateNumber(value);
          },
        },
        axisBorder: {
          show: false,
          color: '#B620E0',
          offsetX: 0,
          offsetY: 0,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `
          <div class="arrow_box">
            <span>
            ${series[seriesIndex][dataPointIndex]}
            </span>

            </div>`;
        },
        style: {
          fontSize: '14px',
          fontFamily: 'Hero-Bold',
        },
        marker: {
          show: false,
        },
        y: {
          y: {
            formatter: (val) => val,
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
        },
        x: {
          show: false,
          format: 'dd MMM yyyy',
        },
      },
      fill: {
        colors: [option.color],
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },

    selection: 'one_month',
  };
  return (
    <div className="line-chart chart" style={{ width: width, height: 245 }}>
      <div className="wrapper" style={{ width: width - 40 }}>
        <div className="info">
          <div className="title">{option.title}</div>
          <div className="value">{option.value}</div>
        </div>
        <Chart
          options={lineChartOption.options}
          series={lineChartOption.series}
          type="area"
          height={185}
        />
      </div>
    </div>
  );
};

export default LineChart;
