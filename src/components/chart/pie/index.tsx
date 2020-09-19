import React, { useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { IPieChartDataItem } from '../../../models';
import './style.scss';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { useViewport } from '../../../hooks';
am4core.useTheme(am4themes_animated);

export interface IPropsForPieChart {
  id: string;
  data: IPieChartDataItem[];
  width?: number;
  height?: number;
}
const PieChart: React.FC<IPropsForPieChart> = ({
  id,
  data,
  width = 453,
  height = 243,
}) => {
  const pieChartRef = useRef<any | HTMLElement>(null);
  const currentWindowDimention = useViewport();
  useLayoutEffect(() => {
    const pieChart = am4core.create(id, am4charts.PieChart);
    // Add data
    pieChart.data = data.map((item: IPieChartDataItem) => ({
      ...item,
      color: am4core.color(item.color),
    }));
    // Add and configure Series
    pieChart.logo.disabled = true;
    if (currentWindowDimention.width <= 1200) pieChart.radius = am4core.percent(50);
    const pieSeries = pieChart.series.push(new am4charts.PieSeries());
    // pieChart.series.
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'label';
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.labels.template.html =
      '<div class="category">{category}<div class="value">{value}%</div></div>';
    pieSeries.labels.template.hideOversized = false;
    pieSeries.slices.template.tooltipText = '{value}%';
    pieSeries.labels.template.width = 65;
    // pieSeries.labels.template.radius = am4core.percent(-50);
    pieSeries.ticks.each((item: am4charts.PieTick) => {
      item.rotation = 100;
    });
    // pieSeries.alignLabels = false;
    // pieSeries.labels.template.radius = am4core.percent(40);

    // pieChartRef.current = pieChart;
    return () => {
      pieChart.dispose();
    };
  }, [data, width, height]);
  useLayoutEffect(() => {
    console.log('changed...');
  }, [width, height]);
  return (
    <div
      id={id}
      className="pie-chart chart"
      style={{ width: width, height: height }}
    ></div>
  );
};

export default PieChart;
