import React, { useState, useEffect } from 'react';
import Page from '../../components/page/Page';
import Search from '../../components/search';
import DateRangePicker from '../../components/date-range-picker';
import CampaignTable from '../../components/campaign-table';
import {
  ICampaignTableData,
  IPieChartDataItem,
  IBarChartDataItem,
  ILineChartOption,
} from '../../models';
import PieChart from '../../components/chart/pie';
import BarChart from '../../components/chart/bar';
import LineChart from '../../components/chart/line';
import { useViewport } from '../../hooks';
import './style.scss';
const randomInt = require('random-int');

const fakeTableData: ICampaignTableData = [
  {
    id: 1,
    campaign: 'Chevy Conquesting',
    budget: '$5 Daily',
    duration: '3 Days',
    days_left: '2 Days',
    days_passed: '1 Days',
    impressions: 117,
    cost: 15,
    roas: 55,
  },
  {
    id: 2,
    campaign: 'Ford Conquesting',
    budget: '$1 Daily',
    duration: '365 Days',
    days_left: '1 Days',
    days_passed: '1 Days',
    impressions: 5480,
    cost: 540,
    roas: 74,
  },
  {
    id: 3,
    campaign: 'Mustang Conquesting',
    budget: '$17 Daily',
    duration: '10 Days',
    days_left: '8 Days',
    days_passed: '2 Days',
    impressions: 579,
    cost: 170,
    roas: 12,
  },
];

const fakeGenderData: IPieChartDataItem[] = [
  {
    label: 'Women',
    value: 35,
    color: '#D1D7F8',
  },
  {
    label: 'Men',
    value: 65,
    color: '#6C63FF',
  },
];
const fakeAgeData: IPieChartDataItem[] = [
  {
    label: '40-50',
    value: 10,
    color: '#BFBCFC',
  },
  {
    label: '20-30',
    value: 24,
    color: '#8780FE',
  },

  {
    label: '30-40',
    value: 62,
    color: '#6C63FF',
  },
  {
    label: '50-60',
    value: 4,
    color: '#DCDAFB',
  },
];
const fakeLocationData: IBarChartDataItem[] = [
  {
    label: 'San Francisco',
    value: 49,
  },
  {
    label: 'Los Angeles',
    value: 28,
  },
  {
    label: 'San Diego',
    value: 13,
  },
  {
    label: 'Sacrameto',
    value: 6,
  },
  {
    label: 'Washington',
    value: 4,
  },
];

const fakeDataForImpression = [
  ['2020-01-19T00:00:00.000Z', 0],
  ['2020-02-19T00:00:00.000Z', 10000],
  ['2020-03-19T00:00:00.000Z', 6000],
  ['2020-04-19T00:00:00.000Z', 20000],
  ['2020-05-19T00:00:00.000Z', 30000],
  ['2020-06-19T00:00:00.000Z', 11000],
  ['2020-07-19T00:00:00.000Z', 15000],
  ['2020-08-19T00:00:00.000Z', 12000],
  ['2020-09-19T00:00:00.000Z', 49000],
  ['2020-10-19T00:00:00.000Z', 3000],
];
const fakeDataForCost = [
  ['2020-01-19T00:00:00.000Z', 0],
  ['2020-02-19T00:00:00.000Z', 10000],
  ['2020-03-19T00:00:00.000Z', 6000],
  ['2020-04-19T00:00:00.000Z', 20000],
  ['2020-05-19T00:00:00.000Z', 30000],
  ['2020-06-19T00:00:00.000Z', 11000],
  ['2020-07-19T00:00:00.000Z', 15000],
  ['2020-08-19T00:00:00.000Z', 12000],
  ['2020-09-19T00:00:00.000Z', 49000],
  ['2020-10-19T00:00:00.000Z', 3000],
];
const fakeDataForROAS = [
  ['2020-01-19T00:00:00.000Z', 40],
  ['2020-02-19T00:00:00.000Z', 10],
  ['2020-03-19T00:00:00.000Z', 0],
  ['2020-04-19T00:00:00.000Z', 20],
  ['2020-05-19T00:00:00.000Z', 80],
  ['2020-06-19T00:00:00.000Z', 90],
  ['2020-07-19T00:00:00.000Z', 34],
  ['2020-08-19T00:00:00.000Z', 43],
  ['2020-09-19T00:00:00.000Z', 46],
  ['2020-10-19T00:00:00.000Z', 34],
];
const lineChartOptionForImpression: ILineChartOption = {
  title: 'impressions',
  color: '#32C5FF',
  value: '72,123',
};
const lineChartOptionForCost: ILineChartOption = {
  title: 'Cost, $',
  color: '#B620E0',
  value: '$1,432',
};
const lineChartOptionForROAS: ILineChartOption = {
  title: 'ROAS, %',
  color: '#356FFF',
  value: '193%',
};
const Dashboard: React.FC = () => {
  const { width } = useViewport();

  let chartWidth = 0;
  if (width >= 1025) {
    chartWidth = (width - 100) / 3;
    document.body.classList.remove('mobile');
  } else if (width >= 941) {
    chartWidth = (width - 80) / 2;
    document.body.classList.remove('mobile');
  } else if (width >= 579) {
    chartWidth = width - 40;
    document.body.classList.remove('mobile');
  } else {
    chartWidth = width - 40;
    document.body.classList.add('mobile');
  }
  const [tableData, setTableData] = useState<ICampaignTableData>([]);
  useEffect(() => {
    setTableData(fakeTableData);
  }, []);
  return (
    <Page>
      <div className="content">
        <div className="content-header">
          <div className="padding-wrapper">
            <Search />
            <DateRangePicker />
          </div>
        </div>
        <div className="content-table">
          <CampaignTable tableData={tableData} />
        </div>
        <div className="content-chart">
          <LineChart
            data={fakeDataForImpression}
            width={chartWidth}
            option={lineChartOptionForImpression}
          />
          <LineChart
            data={fakeDataForCost}
            width={chartWidth}
            option={lineChartOptionForCost}
          />
          <LineChart
            data={fakeDataForROAS}
            width={chartWidth}
            option={lineChartOptionForROAS}
          />
          {/* </div>
        <div className="content-chart"> */}
          <PieChart
            id="pie-chart-gender"
            width={chartWidth}
            data={fakeGenderData}
          />
          <PieChart id="pie-chart-age" width={chartWidth} data={fakeAgeData} />
          <BarChart width={chartWidth} data={fakeLocationData} />
        </div>
      </div>
    </Page>
  );
};
export default Dashboard;
